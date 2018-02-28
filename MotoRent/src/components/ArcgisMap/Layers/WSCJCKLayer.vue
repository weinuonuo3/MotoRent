<template>
  <div v-show="false">
    <table class="tab">
      <tr>
        <td class="td-top">名称</td>
        <td class="td-top">时间</td>
        <td class="td-top">COD</td>
        <td class="td-top">PH</td>
        <td class="td-top">NH3-N</td>
        <td class="td-top">TP</td>
        <td class="td-top">TN</td>
      </tr>
      <tr>
        <td >进口</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>进口1</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>进口2</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>进口3</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
    <div class='butn-div'>
      <div onclick="AppBus(${windowFactI})" style="background: url(../../static/images/home/btn_jibxx.png) no-repeat center">
      </div>
      <div onclick="AppBus(${windowFactD})" style="background: url(../../static/images/home/btn_shebgk.png) no-repeat center">
      </div>
    </div>
  </div>
</template>

<script>
import sitewhere from "@/components/SiteWhere/js/index.js";
import bus from "@/assets/js/eventBus.js";
import layers from "./js/layer.js";

export default {
  props: ["token", "map"],
  data() {
    return {
      AssetsID: []
    };
  },
  methods: {
    model() {
      var _self = this;
      var ImgList = [
        "../../static/images/home/btn_liul_wull.png",
        "../../static/images/home/btn_liul_youll.png",
        "../../static/images/home/btn_liul_diaoxian.png",
        "../../static/images/home/btn_liul_baoj.png"
      ];
      var ImgS = [
        "../../static/images/home/ico_wull.png",
        "../../static/images/home/ico_yunx.png",
        "../../static/images/home/ico_diaox.png",
        "../../static/images/home/ico_diaox.png"
      ];
      var model = layers.GetModel(ImgList, ImgS);
      model.icon_ON = "W_S";
      model.icon_size = [22, 26];
      model.infoTemplate_content = function() {
        return _self.$el.innerHTML;
      };
      return model;
    },
    EditData: function(data) {
      console.log(data);
      var _self = this;
      _self.AssetsID = layers.EditData(
        data,
        _self.map,
        "jck_",
        _self.model(),
        _self.AssetsID,
        "W_S"
      );
    },
    BindData: function(data) {
      var _self = this;
      layers.BindData(
        data,
        _self.token,
        _self.map,
        "jck_",
        _self.model(),
        _self.AssetsID,
        "W_S"
      );
    }
  },
  mounted: function() {
    var _self = this;
    _self.EditData(sitewhere.DevicesGroupData[_self.token]);
    bus.$on("WSCJCK", function(data) {
      //_self.BindData(data);
      _self.EditData(sitewhere.DevicesGroupData[_self.token]);
    });
    bus.$on("WSCJCK_Refresh", function(data) {
      _self.EditData(data[_self.token]);
    });
    bus.$on("SearchRefresh", function(data) {
      $.each(_self.AssetsID, function(i, layerID) {
        layers.locationMarkerOnMap(_self.map, data, layerID);
      });
    });
  }
};

</script>

<style>

</style>
