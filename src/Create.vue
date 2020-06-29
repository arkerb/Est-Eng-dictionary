<template>
    <div>
        <form>
            <div class="form-group">
                <label for="word">Word</label>
                <input v-model='word' type="text" class="form-control" id="word" placeholder="Type a word" required="required">
            </div>
            <div class="form-group">
                <label for="explanation">Translation</label>
                <input v-model='translation' type="text" class="form-control" id="explanation" placeholder="Translate the word" required="required">
            </div>
            <div class="form-group">
                <label for="language">What language is the word written in?</label>
                <select v-model='language' class="form-control" id="language" required="required">
                    <option>English</option>
                    <option>Estonian</option>
                </select>
            </div>
        </form>
        <button v-on:click='createword' class="btn btn-secondary mb-2 ">Submit word</button>
        Estonian {{estonian}}
        <br>
        English {{english}}
    </div>
</template>

<script>
    export default {
        name: 'app',
        el: '#app',
        data: function() {
            return {
                estonian: {},
                english: {},
                message: 'sdasd',
                word: '',
                translation: '',
                language: '',
                loaded: false,
                values: [],
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
                this.values = [];
                if (this.word && this.language && this.translation) {
                    if (this.language === "Estonian"){
                        if (!(this.word in this.estonian)) {
                            this.estonian[this.word] = this.translation;
                            this.english[this.translation] = this.word;
                        }else if (!this.estonian[this.word].includes(this.translation)){
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
                        }else if (!this.english[this.word].includes(this.translation)){
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
                }
                localStorage.estonian = JSON.stringify(this.estonian);
                localStorage.english = JSON.stringify(this.english);
            }
        }
    }
</script>
