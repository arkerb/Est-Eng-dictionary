<template>
    <div>
        <form>
            <div class="row">
                <div class="col">
                    <label for="word">Word</label>
                    <input type="text" class="form-control" id="word" placeholder="Type a word to translate">
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="language">What language is the word written in?</label>
                        <select class="form-control" id="language">
                            <option>English</option>
                            <option>Estonian</option>
                        </select>
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="filter">Filter search</label>
                        <select class="form-control" id="filter">
                            <option>Exact match</option>
                            <option>Must contain</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class>
                <button type="submit" class="btn btn-secondary mb-2 align-items-center">Find Translation</button>
            </div>
        </form>
    </div>
</template>

