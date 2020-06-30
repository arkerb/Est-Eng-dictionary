<template>
    <div>
        <form>
            <div class="alert alert-danger" role="alert" v-if="error">
                Please fill in all fields
            </div>
            <div class="row">
                <div class="col">
                    <label for="word">Word</label>
                    <input type="text" v-model='word' class="form-control" id="word" placeholder="Type a word to translate">
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="language">Translate to</label>
                        <select v-model="language" class="form-control" id="language">
                            <option value="English ">Estonian</option>
                            <option value="Estonian">English</option>
                        </select>
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="filter">Search Filter</label>
                        <select v-model='filter' class="form-control" id="filter">
                            <option>Exact match</option>
                            <option>Fuzzy Match</option>
                        </select>
                    </div>
                </div>
            </div>
        </form>
        <button v-on:click='findword' class="btn btn-secondary mb-2 align-items-center">Find Translation</button>

        <h3>Results </h3>
        <div v-if="loaded">
            <ul class="list-group">
                <li class="list-group-item" v-for="result in results" :key="result">
                    {{result}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data: function() {
            return {
                estonian: {},
                english: {},
                data: {},
                results: '',
                word: '',
                fuzzy: '',
                position: 0,
                language: '',
                filter: '',
                loaded: false,
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
            findword: function () {
                this.error = false;
                if (this.word && this.language && this.filter){
                    this.data = this.english;
                    this.results = [];
                    if (this.language === "Estonian"){
                        this.data = this.estonian
                    }
                    if (this.filter.includes("Exact match")){
                        for(const key in this.data) {
                            if (key.toLowerCase() === this.word.toLowerCase()){
                                this.results.push(key + ' - ' + this.data[key])
                            }
                        }
                    }else{
                        this.fuzzy = this.word.replace(/ /g, '').toLowerCase().split(''); // Removing spaces from Fuzzy filter
                        for(const key in this.data) {
                            const newkey = key.toLowerCase().split(''); // Lowercase-ing and splitting word into chars
                            this.position = 0; // Position in Fuzzy filter list
                            for (const index in newkey){
                                if (this.fuzzy[this.position] === newkey[index]){
                                    this.position++;
                                }
                                if (this.position >= this.fuzzy.length){
                                    this.results.push(key + ' - ' + this.data[key]);
                                    break
                                }
                            }
                        }
                    }
                    if (this.results.length === 0){
                        this.results = ['No match was found.']
                    }
                }else{
                    this.error = true;
                }
                this.loaded = true;
            }
        }
    }
</script>

