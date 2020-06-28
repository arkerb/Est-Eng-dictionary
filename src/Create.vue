<template>
    <div>
        <form>
            <div class="form-group">
                <label for="word">Word</label>
                <input type="text" class="form-control" id="word" placeholder="Type a word">
            </div>
            <div class="form-group">
                <label for="explanation">Translation</label>
                <input type="text" class="form-control" id="explanation" placeholder="Translate the word">
            </div>
            <div class="form-group">
                <label for="language">What language is the word written in?</label>
                <select class="form-control" id="language">
                    <option>English</option>
                    <option>Estonian</option>
                </select>
            </div>
            <button type="submit" class="btn btn-secondary mb-2 ">Submit word</button>
        </form>
    </div>
</template>

