<template>
    <div>
        <h1>유행하는 베이킹 레시피 Top 3</h1>
        <div class="recipe-list">
            <div v-for="recipe in recipes" :key="recipe.id" class="recipe-card">
                <h2>{{ recipe.title }}</h2>
                <img :src="recipe.image" :alt="recipe.title">
                <p class="ingredients">
                    <strong>재료:</strong>
                <ul class="centered-list">
                    <li v-for="ingredient in recipe.ingredients" :key="ingredient">{{ ingredient }}</li>
                </ul>
                </p>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            recipes: [
                {
                    id: 1,
                    title: "스모어 쿠키",
                    image: "https://i.pinimg.com/564x/a3/bc/68/a3bc68b7f63abb03d7a745dbb46c063c.jpg",
                    ingredients: [
                        "밀가루",
                        "버터",
                        "설탕",
                        "베이킹 소다",
                        "밀푀유",
                        "바닐라 에센스"
                    ]
                },
                {
                    id: 2,
                    title: "브라우니",
                    image: "https://i.pinimg.com/564x/e4/58/e1/e458e16009045e82971123258de2b3e9.jpg",
                    ingredients: [
                        "초콜릿",
                        "버터",
                        "설탕",
                        "밀가루",
                        "계란",
                        "바닐라 에센스"
                    ]
                },
                {
                    id: 3,
                    title: "도시락 케이크",
                    image: "https://i.pinimg.com/564x/a5/1c/a6/a51ca646830bd13c39b4155969eaf26a.jpg",
                    ingredients: [
                        "비스킷",
                        "생크림",
                        "크림 치즈",
                        "설탕",
                        "젤라틴",
                        "과일(딸기, 블루베리 등)"
                    ]
                }
            ]
        };
    }
};
</script>
  
<style scoped>
h1 {
    font-size: 24px;
    margin-bottom: 20px;
}

.recipe-list {
    display: flex;
    justify-content: space-between;
}

.recipe-card {
    width: 30%;
    padding: 20px;
    background-color: #fff0f0;
    border-radius: 50px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.recipe-card h2 {
    font-size: 18px;
    margin-bottom: 10px;
}

.recipe-card img {
    width: 100%;
    margin-bottom: 10px;
    border-radius: 50px;
}

.centered-list {
    text-align: center;
}

.ingredients {
    text-align: center;
}

ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
}

ul li {
    margin-bottom: 5px;
}
</style>
  