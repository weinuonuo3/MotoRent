<template>
    <div class="gk_div">
      <div class="tab_icon">
            <div v-for="item in IconList">
                <div v-if="item.show==true">
                    <div><img v-bind:src="item.icon" />&nbsp;</div>
                    <div>{{item.str}}</div>
                </div>
            </div>
      </div>
      <div id="div" class="tabe">
        <div class="title">出<br>口</div>
        <div class="block-div">
          <table>
            <tr>
              <td class="left-td">数据采集日期</td>
              <td></td>
            </tr>
            <tr>
              <td class="left-td">综合状态</td>
              <td></td>
            </tr>
            <tr>
              <td class="left-td">最后通讯时间</td>
              <td></td>
            </tr>
          </table>
        </div>
        <div class="blockgk-div">
          <table>
            <tr>
              <td class="left1-td">通讯状态</td>
              <td></td>
            </tr>
            <tr>
              <td class="left1-td">COD(mg/L)</td>
              <td></td>
            </tr>
            <tr>
              <td class="left1-td">COD/TOC最后测量时间</td>
              <td></td>
            </tr>
          </table>
        </div>
        <div class="block-div">
          <table>
            <tr>
              <td class="left-td">PH</td>
              <td></td>
            </tr>
            <tr>
              <td class="left-td">液位(cm)</td>
              <td></td>
            </tr>
            <tr>
              <td class="left-td">瞬时流量(m³/h)</td>
              <td></td>
            </tr>
          </table>
        </div>
        <div class="block-div">
          <table>
            <tr>
              <td class="left-td">氨氮(mg/L)</td>
              <td></td>
            </tr>
            <tr>
              <td class="left-td">总磷(mg/L)</td>
              <td></td>
            </tr>
            <tr>
              <td class="left-td">总氮(mg/L)</td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
      <div id="div" class="tabe">
        <div class="title">出<br>口</div>
        <div class="block-div">
          <table>
            <tr>
              <td class="left-td">数据采集日期</td>
              <td></td>
            </tr>
            <tr>
              <td class="left-td">综合状态</td>
              <td></td>
            </tr>
            <tr>
              <td class="left-td">最后通讯时间</td>
              <td></td>
            </tr>
          </table>
        </div>
        <div class="blockgk-div">
          <table>
            <tr>
              <td class="left1-td">通讯状态</td>
              <td></td>
            </tr>
            <tr>
              <td class="left1-td">COD(mg/L)</td>
              <td></td>
            </tr>
            <tr>
              <td class="left1-td">COD/TOC最后测量时间</td>
              <td></td>
            </tr>
          </table>
        </div>
        <div class="block-div">
          <table>
            <tr>
              <td class="left-td">PH</td>
              <td></td>
            </tr>
            <tr>
              <td class="left-td">液位(cm)</td>
              <td></td>
            </tr>
            <tr>
              <td class="left-td">瞬时流量(m³/h)</td>
              <td></td>
            </tr>
          </table>
        </div>
        <div class="block-div">
          <table>
            <tr>
              <td class="left-td">氨氮(mg/L)</td>
              <td></td>
            </tr>
            <tr>
              <td class="left-td">总磷(mg/L)</td>
              <td></td>
            </tr>
            <tr>
              <td class="left-td">总氮(mg/L)</td>
              <td></td>
            </tr>
          </table>
        </div>
        
      </div>
      <div id="div" class="tabe">
        <div class="title">出<br>口</div>
        <div class="block-div">
          <table>
            <tr>
              <td class="left-td">数据采集日期</td>
              <td></td>
            </tr>
            <tr>
              <td class="left-td">综合状态</td>
              <td></td>
            </tr>
            <tr>
              <td class="left-td">最后通讯时间</td>
              <td></td>
            </tr>
          </table>
        </div>
        <div class="blockgk-div">
          <table>
            <tr>
              <td class="left1-td">通讯状态</td>
              <td></td>
            </tr>
            <tr>
              <td class="left1-td">COD(mg/L)</td>
              <td></td>
            </tr>
            <tr>
              <td class="left1-td">COD/TOC最后测量时间</td>
              <td></td>
            </tr>
          </table>
        </div>
        <div class="block-div">
          <table>
            <tr>
              <td class="left-td">PH</td>
              <td></td>
            </tr>
            <tr>
              <td class="left-td">液位(cm)</td>
              <td></td>
            </tr>
            <tr>
              <td class="left-td">瞬时流量(m³/h)</td>
              <td></td>
            </tr>
          </table>
        </div>
        <div class="block-div">
          <table>
            <tr>
              <td class="left-td">氨氮(mg/L)</td>
              <td></td>
            </tr>
            <tr>
              <td class="left-td">总磷(mg/L)</td>
              <td></td>
            </tr>
            <tr>
              <td class="left-td">总氮(mg/L)</td>
              <td></td>
            </tr>
          </table>
        </div>
        
      </div>
      <div id="div" class="tabe">
        <div class="title">出<br>口</div>
        <div class="block-div">
          <table>
            <tr>
              <td class="left-td">数据采集日期</td>
              <td></td>
            </tr>
            <tr>
              <td class="left-td">综合状态</td>
              <td></td>
            </tr>
            <tr>
              <td class="left-td">最后通讯时间</td>
              <td></td>
            </tr>
          </table>
        </div>
        <div class="blockgk-div">
          <table>
            <tr>
              <td class="left1-td">通讯状态</td>
              <td></td>
            </tr>
            <tr>
              <td class="left1-td">COD(mg/L)</td>
              <td></td>
            </tr>
            <tr>
              <td class="left1-td">COD/TOC最后测量时间</td>
              <td></td>
            </tr>
          </table>
        </div>
        <div class="block-div">
          <table>
            <tr>
              <td class="left-td">PH</td>
              <td></td>
            </tr>
            <tr>
              <td class="left-td">液位(cm)</td>
              <td></td>
            </tr>
            <tr>
              <td class="left-td">瞬时流量(m³/h)</td>
              <td></td>
            </tr>
          </table>
        </div>
        <div class="block-div">
          <table>
            <tr>
              <td class="left-td">氨氮(mg/L)</td>
              <td></td>
            </tr>
            <tr>
              <td class="left-td">总磷(mg/L)</td>
              <td></td>
            </tr>
            <tr>
              <td class="left-td">总氮(mg/L)</td>
              <td></td>
            </tr>
          </table>
        </div>
        
      </div><div id="div" class="tabe">
        <div class="title">出<br>口</div>
        <div class="block-div">
          <table>
            <tr>
              <td class="left-td">数据采集日期</td>
              <td></td>
            </tr>
            <tr>
              <td class="left-td">综合状态</td>
              <td></td>
            </tr>
            <tr>
              <td class="left-td">最后通讯时间</td>
              <td></td>
            </tr>
          </table>
        </div>
        <div class="blockgk-div">
          <table>
            <tr>
              <td class="left1-td">通讯状态</td>
              <td></td>
            </tr>
            <tr>
              <td class="left1-td">COD(mg/L)</td>
              <td></td>
            </tr>
            <tr>
              <td class="left1-td">COD/TOC最后测量时间</td>
              <td></td>
            </tr>
          </table>
        </div>
        <div class="block-div">
          <table>
            <tr>
              <td class="left-td">PH</td>
              <td></td>
            </tr>
            <tr>
              <td class="left-td">液位(cm)</td>
              <td></td>
            </tr>
            <tr>
              <td class="left-td">瞬时流量(m³/h)</td>
              <td></td>
            </tr>
          </table>
        </div>
        <div class="block-div">
          <table>
            <tr>
              <td class="left-td">氨氮(mg/L)</td>
              <td></td>
            </tr>
            <tr>
              <td class="left-td">总磷(mg/L)</td>
              <td></td>
            </tr>
            <tr>
              <td class="left-td">总氮(mg/L)</td>
              <td></td>
            </tr>
          </table>
        </div>
        
      </div>
    </div>
</template>
<script>
import devicefun from "../js/index.js";

export default {
  props: ["datalist"],
  data() {
    return {
      IconList: [
        {
          N_num: 0,
          show: true,
          icon: "../../static/images/home/btn__bengz_kaibeng.png",
          str: "运行正常"
        },
        {
          N_num: 0,
          show: true,
          icon: "../../static/images/home/btn__bengz_tingbeng.png",
          str: "严重超标"
        },
        {
          N_num: 0,
          show: true,
          icon: "../../static/images/home/btn__bengz_baoj.png",
          str: "一般超标"
        },
        {
          N_num: 0,
          show: true,
          icon: "../../static/images/home/btn__bengz_diaoxian.png",
          str: "停产、设备异常"
        }
      ],
      devicedata: {
        dataSource: {
          data: this.list
        },
        change: function() {},
        dataBound: function() {
          var rows = this.items();
          $(rows).each(function() {
            var s = $(this).find("td:eq(10)");
            var time = $(s).text();
            if (time != undefined && time != "") {
              time = new Date(parseInt(time));
              $(s).text(formatDate(time, "yyyy-MM-dd hh:mm:ss", 0));
            }
          });
        },
        height: 180,
        selectable: "multiple,row",
        allowCopy: true,
        scrollable: true
      },
      list: []
    };
  },
  watch: {
    list: function(newData) {
      $("#factDevices")
        .data("kendoGrid")
        .dataSource.data(newData);
    },
    datalist: function(obj) {
      var _self = this;
      $("#factDevices").kendoGrid(_self.devicedata);
    }
  },
  mounted: function() {
    for(var i=0;i<data.length;i++){
      if(i==1){
			html+="<div class='row-factDevices'>"
		  }
      else{
			html+="<div class='row-factDevices row-distance'>"
      }
      var html="";
      html+="<div class='tabe'>";
      html+="<div class='title'>'+[i]+'</div>";
      html+="<div class='block-div'>";
      html+="<table>";
      html+="<tr>";
      html+="<td class='left-td'>数据采集日期</td><td>"+data[i]['time']+"</td>";
      html+="</tr>";
      html+="<tr>";
      html+="<td class='left-td'>综合状态</td><td><img src='"+data[i]['src']+"'></img></td>";
      html+="</tr>";
      html+="<tr>";
      html+="<td class='left-td'>最后通讯时间</td><td>"+data[i]['lasttime']+"</td>";
      html+="</tr>";
      html+="</table>";
      html+="</div>";
      html+="<div class='blockgk-div'>";
      html+="<table>";
      html+="<tr>";
      html+="<td class='left1-td'>通讯状态</td><td></td>";
      html+="</tr>";
      html+="<tr>";
      html+="<td class='left1-td'>COD(mg/L)</td><td></td>";
      html+="</tr>";
      html+="<tr>";
      html+="<td class='left1-td'>COD/TOC最后测量时间</td></td>";
      html+="</tr>";
      html+="</table>";
      html+="</div>";
      html+="<div class='block-div'>";
      html+="<table>";
      html+="<tr>";
      html+="<td class='left-td'>PH</td><td></td>";
      html+="</tr>";
      html+="<tr>";
      html+="<td class='left-td'>液位(cm)</td><td></td>";
      html+="</tr>";
      html+="<tr>";
      html+="<td class='left-td'>瞬时流量(m³/h)</td><td></td>";
      html+="</tr>";
      html+="</table>";
      html+="</div>";
      html+="<div class='block-div'>";
      html+="<table>";
      html+="<tr>";
      html+="<td class='left-td'>氨氮(mg/L)</td><td></td>";
      html+="</tr>";
      html+="<tr>";
      html+="<td class='left-td'>总磷(mg/L)</td><td></td>";
      html+="</tr>";
      html+="<tr>";
      html+="<td class='left-td'>总氮(mg/L)</td><td></td>";
      html+="</tr>";
      html+="</table>";
      html+="</div>";
      html+="</div>";
      $("#div").html(html);
    }

  }
};
</script>

<style>

</style>
