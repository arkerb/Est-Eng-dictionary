<template>
    <div>
        <form>
            <div class="alert alert-success" role="alert" v-if="success">
                Successfully submitted a translation
            </div>
            <div class="alert alert-danger" role="alert" v-if="error">
                Please fill in all fields
            </div>
            <div class="form-group">
                <label for="word">Word</label>
                <input v-model='word' type="text" class="form-control" id="word" placeholder="Type a word" required="required">
            </div>
            <div class="form-group">
                <label for="language">Translating To</label>
                <select v-model='language' class="form-control" id="language" required="required">
                    <option value="English ">Estonian</option>
                    <option value="Estonian">English</option>
                </select>
            </div>
            <div class="form-group">
                <label for="explanation">Translation</label>
                <input v-model='translation' type="text" class="form-control" id="explanation" placeholder="Translate the word" required="required">
            </div>
        </form>
        <button v-on:click='createword' class="btn btn-secondary mb-2 ">Submit word</button>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data: function() {
            return {
                estonian: {},
                english: {},
                word: '',
                translation: '',
                language: '',
                values: [],
                success: false,
                error: false,
            }
        },
        mounted() {
            if (localStorage.estonian || localStorage.english) {
                this.estonian = JSON.parse(localStorage.estonian);
                this.english = JSON.parse(localStorage.english);
            }
        },
        methods: {
            createword: function () {
                /*
                Function that adds words to dictionary
                 */
                this.values = []; // List to help if one key has multiple values.
                this.success = false;
                this.error = false; // Booleans to call out pop-ups
                if (this.word && this.language && this.translation) { // Check if form is not empty
                    if (this.language === "Estonian"){
                        if (!(this.word in this.estonian)) { // If word doesn't already exist in dictionary
                            this.estonian[this.word] = this.translation;
                            this.english[this.translation] = this.word;
                        }else if (!this.estonian[this.word].includes(this.translation)){ // Prevents same values in dictionary
                            this.values = this.estonian[this.word] + ", " + this.translation;
                            this.estonian[this.word] =this.values;
                            if (!(this.translation in this.english)){
                                this.english[this.translation] = this.word;
                            }else{
                                this.values = this.english[this.translation] + ", " + this.word;
                                this.english[this.translation] = this.values;
                            }
                        }
                    }else{
                        if (!(this.word in this.english)) {
                            this.english[this.word] = this.translation;
                            this.estonian[this.translation] = this.word;
                        }else if (!this.english[this.word].includes(this.translation)){  // Prevents same values in dictionary
                            this.values = this.english[this.word] + ", " + this.translation;
                            this.english[this.word] =this.values;
                            if (!(this.translation in this.estonian)){
                                this.estonian[this.translation] = this.word;
                            }else{
                                this.values = this.estonian[this.translation] + ", " + this.word;
                                this.estonian[this.translation] = this.values;
                            }
                        }
                    }
                    this.success = true;
                }else{
                    this.error = true;
                }
                localStorage.estonian = JSON.stringify(this.estonian);
                localStorage.english = JSON.stringify(this.english);
            }
        }
    }
</script>
