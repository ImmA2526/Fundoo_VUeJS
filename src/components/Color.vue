<template>
<div class="color">


    <div>
        <Card
          className="colorCardContainer"
          style={{ width: 200, height: 150 }}
        >
          {DATA.map((item, index) => (
            <button onClick=selectColor(item.id)}
              key={index}
              className="button"
              style={{ backgroundColor: item.id }}
            ></button>
          ))}
        </Card>
      ) : null}
    </div>
</div>
    
</template>


<script>
export default {
    name:"colorList",
    
methods:{
    colorlist(){
// const DATA =// 
[
    { title: "MAROON", id: "#800000" },
    { title: "WHITE", id: "#FFFFFF" },
    { title: "salmon5", id: "#CFAFAF" },
    { title: "dustyrose", id: "#D0C0C0" },
    { title: "indianred4", id: "#DBA9A9" },
    { title: "brown", id: "#DF9D9D" },
    { title: "OLIVE", id: "#808000" },
    { title: "LIME", id: "#00FF00" },
    { title: "GREEN", id: "#008000" },
    { title: "AQUA", id: "#00FFFF" },
    { title: "TEAL", id: "#008080" },
    { title: "NAVY", id: "#000080" },
    { title: "INDIANRED", id: "#CD5C5C" },
    { title: "rosybrown", id: "#CFAFAF" },
    { title: "indianred", id: "#EABCBC" },
    { title: "firebrick5", id: "#E69898" },
    { title: "strawberry", id: "#EDA2A2" },
    { title: "bloodred", id: "#FF6666" },
  ];
    }
},
}


</script>

<style lang="scss" scoped>

.colorCardContainer{
    position: absolute;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.button{
    margin: 3px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    cursor: pointer;
}
.colorIcon{
    cursor: pointer;
    font-size: 1.7rem !important;
}
</style>

