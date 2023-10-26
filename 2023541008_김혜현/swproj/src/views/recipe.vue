<template>
    <div class="recipe">
        <h1>찾으시는 레시피를 검색해보세요</h1>
    </div>
    <div class="search00">
        <label>

            <input v-model="keyword" class="input01" type="text" id="search" @keyup="filter()"
                placeholder="궁금한 레시피를 검색하세요." />
        </label>
    </div>
    <div class="bread">
        <h1>빵</h1>
    </div>
    <ul id="list">
        <li v-for="(item, key) in filteredList()" :key="key">
            <div class="listBox">
                <div class="listIneer">

                    <iframe class="im1" :src="item.videoUrl" title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                    <div class="plantkr">{{ item.namekr }} </div>
                    <span class="planten">{{ item.nameen }}</span>
                </div>
            </div>
        </li>


    </ul>
</template>

<script>
export default {
    data() {
        return {
            keyword: "",
            list: [
                { namekr: "슈크림빵", nameen: "creampuff", videoUrl: "https://www.youtube.com/embed/ptW7zemegL8" },
                { namekr: "소금빵", nameen: "saltbread", videoUrl: "https://www.youtube.com/embed/AbjqzR3nyqU" },
                { namekr: "모카번", nameen: "mocha bun", videoUrl: "https://www.youtube.com/embed/yF9DIrbYJ8A" },
                { namekr: "스모어쿠키", nameen: "s'mores cookie", videoUrl: "https://www.youtube.com/embed/yBvo6RvRWMc" },
                { namekr: "크랙쿠키", nameen: "crack cookie", videoUrl: "https://www.youtube.com/embed/mjwW8ca983Y" },
                { namekr: "바게트", nameen: "baguette", videoUrl: "https://www.youtube.com/embed/G_rRoCQa4Mc" },
                { namekr: "소세지빵", nameen: "sausages bread", videoUrl: "https://www.youtube.com/embed/0IRilKlXAOI" },
                { namekr: "브라우니", nameen: "brownies", videoUrl: "https://www.youtube.com/embed/yF9DIrbYJ8A" },
                { namekr: "크루와상", nameen: "croissant", videoUrl: "https://www.youtube.com/embed/YZyR9Br1gTw" },
                { namekr: "크로플", nameen: "croiffle", videoUrl: "https://www.youtube.com/embed/_zKvs74xclY" },
                { namekr: "도시락케이크", nameen: "portacomidas cake", videoUrl: "https://www.youtube.com/embed/Ootn--KQtng" },
                { namekr: "단팥빵", nameen: "sweet red-bean bread", videoUrl: "https://www.youtube.com/embed/zd-Bu_dKZ2s" },
            ]
        }
    },
    // ...
    methods: {
        filteredList() {
            var returnList = []
            this.list.forEach(item => {
                if (item.namekr.indexOf(this.keyword) > -1) {
                    returnList.push(item)
                }
            })
            return returnList
        },
        filter() {
            let search = document.getElementById("search").value.toLowerCase();
            let listInner = document.getElementsByClassName("listInner");

            for (let i = 0; i < listInner.length; i++) {
                let planten = listInner[i].getElementsByClassName("planten");
                let plantkr = listInner[i].getElementsByClassName("plantkr");
                if (
                    planten[0].innerHTML.toLowerCase().indexOf(search) !== -1 ||
                    plantkr[0].innerHTML.toLowerCase().indexOf(search) !== -1
                ) {
                    listInner[i].style.display = "flex";
                } else {
                    listInner[i].style.display = "none";
                }
            }
        }
    }
}
</script>

<style>
.search00 {
    margin: 2% 1%;
    padding: 0%;

}


.input01 {
    padding: 5px 20px;
    width: 390px;
    height: 25px;
    border-radius: 10px;
    margin: 0px 150px;
    background-color: #fffaf0;
    border: 0.3 solid black;

}

ul {
    list-style-type: none;
}

#list {
    margin: 2% 12% -4%;
    padding: 0%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-around;
    flex-direction: row;
    align-items: center;
}

#list>li {
    flex-basis: 33%;
}


.im1,
.im2,
.im3,
.im4,
.im5,
.im6,
.im7,
.im8,
.im9 {
    width: auto;
    height: auto;
    border-radius: 10px;

}

.pagemove {
    text-align: center;
    margin: 40px;
}
</style>
