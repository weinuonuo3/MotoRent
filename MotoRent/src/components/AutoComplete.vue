<template>
<div class="l_h_serach">
    <span><input type="text" id="searchInput" placeholder="请输入泵站名称"/></span>
    <span v-on:click="searchClick"><img src='../../../static/images/home/btn_chax_normal.png'/></span>
</div>
</template>

<script>
import sitewhere from "@/components/SiteWhere/js/index.js";
import bus from "@/assets/js/eventBus.js";

export default {
  data() {
    return {
      DataList: []
    };
  },
  watch: {
    DataList: function(newDataList) {
      this.EditData(newDataList);
    }
  },
  methods: {
    Init: function() {
      $("#searchInput").kendoAutoComplete({
        filter: "startswith",
        placeholder: "请输入泵站名称",
        dataSource: []
      });
     
    },
    EditData: function(newDataList) {
      var data = [];
      for (var k in newDataList) {
        if (!newDataList[k].deleted) {
          newDataList[k].list.forEach(function(v, i) {
            if (!v.deleted) {
              data.push(v["name"]);
            }
          });
        }
      }
      $("#searchInput")
        .data("kendoAutoComplete")
        .dataSource.data(data);
    },
    searchClick: function() {
      var name = $("#searchInput").data("kendoAutoComplete")._prev; // 2017-11 -13gjm
      bus.$emit("SearchRefresh", name);
    }
  },
  mounted: function() {
    var _self = this;
    _self.Init();
    _self.DataList = sitewhere.DevicesGroupData;
    bus.$on("AssetsListRefresh", function(data) {
      _self.EditData(data);
    });
  }
};

</script>

<style>
.l_h_serach {
  height: 28px;
  font-size: 14px;
  font-family: "Microsoft YaHei";
  font-weight: bold;
  color: #666666;
  padding-left: 15px;
  padding-top: 14px;
  
}

.l_h_serach span {
  float: left;
  height: 28px;
  line-height: 28px;
  color: #ffffff;
}
.l_h_serach input {
  width: 110px;
  height: 24px;
  border: 1px solid #cccccc;
  color: #c7c7c7;
  text-indent: 5px;
}
.l_h_serach span img {
  cursor: pointer;
}
.k-autocomplete.k-state-default {
  width: 135px;
  border-width: 0px;
}
.k-autocomplete .k-input {
  width: 110px;
  height: 26px;
  border: 1px solid #cccccc;
  color:#333333;
  text-indent: 5px;
  border-radius: 3px 0px 0px 3px;
  padding: 0;
  
}
.k-popup .k-list .k-item {
  padding: 0;
  padding-left: 7px;
  font-size: 12px;
  background-color: #ffffff;
  color: #666666;
  font-family: "宋体";
  cursor: pointer;
  font-weight: normal;
  height: 22px;
}
.k-popup .k-list .k-item:hover {
  background-color: #f4f4f4;
  border: 0px solid #ffffff;
}

.k-reset {
  background-color: #ffffff;
}
/*2017-11-27*/
.k-autocomplete .k-input:-ms-input-placeholder
{
  color:#757575;
}
</style>
