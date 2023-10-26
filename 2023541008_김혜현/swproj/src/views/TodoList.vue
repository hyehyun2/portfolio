<template>
    <div>
        <h1>할 일 목록</h1>
        <input v-model="newItem" @keyup.enter="addItem" placeholder="할 일을 입력하세요">
        <table>
            <thead>
                <tr>
                    <th>할 일</th>
                    <th>완료 여부</th>
                    <th>작업</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in items" :key="index" :class="{ 'completed': item.completed }">
                    <td>{{ item.text }}</td>
                    <td>
                        <input type="checkbox" v-model="item.completed">
                    </td>
                    <td>
                        <button @click="removeItem(index)">삭제</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            newItem: '',
            items: []
        };
    },
    methods: {
        addItem() {
            if (this.newItem !== '') {
                this.items.push({ text: this.newItem, completed: false });
                this.newItem = '';
            }
        },
        removeItem(index) {
            this.items.splice(index, 1);
        }
    }
};
</script>
  
<style scoped>
h1 {
    font-size: 24px;
    margin-bottom: 10px;
}

input {
    width: 200px;
    height: 30px;
    margin-bottom: 10px;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    padding: 10px;
    border-bottom: 1px solid #ccc;
}

.completed {
    text-decoration: line-through;
}


button {
    background-color: #e5c7c7;
    color: #fff;
    padding: 5px 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}
</style>
  