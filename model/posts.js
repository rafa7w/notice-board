module.exports = {
        posts: [
                {
                        id: "sdsaasdf",
                        title: "Title test",
                        description: "Test description"
                }
        ],

        getAll() {
                return this.posts;
        },

        newPost(title, description)  {
                this.posts.push({ id: generateID(), title, description })
        }
}

function generateID(){
        return Math.random().toString(36).substr(2,9);
}