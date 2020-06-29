<template>
    <div>
        <form
                id="app"
                name="app"
        >
            <div class="row">
                <div class="col">
                    <label for="word">Word</label>
                    <input type="text" v-model='word' class="form-control" id="word" placeholder="Type a word to translate">
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="language">What language is the word written in?</label>
                        <select v-model="language" class="form-control" id="language">
                            <option>English</option>
                            <option>Estonian</option>
                        </select>
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="filter">Filter search</label>
                        <select v-model='filter' class="form-control" id="filter">
                            <option>Exact match</option>
                            <option>Must contain</option>
                        </select>
                    </div>
                </div>
            </div>
        </form>
        <button v-on:click='findword' class="btn btn-secondary mb-2 align-items-center">Find Translation</button>
        <p v-if="loaded">{{estonian}}</p>
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
                results: '',
                word: '',
                language: '',
                filter: '',
                loaded: false,
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
                this.loaded = true;
            }
        }
    }
</script>

