(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21839e"],{c9a3:function(e,t,i){"use strict";i.r(t);i("b0c0");var l=function(){var e=this,t=e._self._c;return t("el-container",[t("el-main",[t("el-form",{ref:"searchForm",staticClass:"search-form",attrs:{model:e.searchForm,"label-width":"120px"}},[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:18}},[t("el-row",{staticClass:"param-row"},[t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"用户手机号",prop:"phone"}},[t("el-input",{attrs:{maxlength:"60"},model:{value:e.searchForm.phone,callback:function(t){e.$set(e.searchForm,"phone",t)},expression:"searchForm.phone"}})],1)],1)],1),t("el-row",{staticClass:"param-row"})],1),t("el-col",{attrs:{span:6}},[t("el-row",{attrs:{type:"flex",justify:"center"}},[t("el-button",{attrs:{type:"primary"},on:{click:e.handleSearch}},[e._v("查询")]),t("el-button",{on:{click:e.handleSearchClear}},[e._v("清空")])],1)],1)],1)],1),t("div",{staticClass:"content"},[t("el-alert",{staticClass:"alert",attrs:{title:"",type:"info",closable:!1}},[t("div",{staticClass:"left"},[e._v("用户列表")])]),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.table.tableLoading,expression:"table.tableLoading"}],staticClass:"table",attrs:{data:e.table.list,border:""}},[t("el-table-column",{attrs:{label:"订单号","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("span",[e._v(e._s(i.row.order_id))])]}}])}),t("el-table-column",{attrs:{label:"患者手机号","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("span",[e._v(e._s(i.row.phone))])]}}])}),t("el-table-column",{attrs:{label:"患病时长","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("span",[e._v(e._s(i.row.fall_time))])]}}])}),t("el-table-column",{attrs:{label:"是否就症过","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("span",[e._v(e._s(i.row.is_see))])]}}])}),t("el-table-column",{attrs:{label:"患病描述","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("span",[e._v(e._s(i.row.detail))])]}}])}),t("el-table-column",{attrs:{fixed:"right",label:"操作",width:"360"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.handleDtl(i.$index,i.row)}}},[e._v("查看药方")]),t("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleDtl2(i.$index,i.row)}}},[e._v("开药")]),t("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleDtl3(i.$index,i.row)}}},[e._v("沟通")]),1===i.row.status?t("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.freeze(i.$index,i.row)}}},[e._v("解除冻结")]):e._e()]}}])})],1),t("el-pagination",{staticClass:"pagination",attrs:{background:"","current-page":e.table.currentPage,"page-sizes":[10,20,30,50,100,200],layout:"total, sizes, prev, pager, next, jumper",total:e.table.total},on:{"update:currentPage":function(t){return e.$set(e.table,"currentPage",t)},"update:current-page":function(t){return e.$set(e.table,"currentPage",t)},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e.editAddDialog.visible?t("el-dialog",{attrs:{title:e.editAddDialog.title,visible:e.editAddDialog.visible,width:"50%"},on:{"update:visible":function(t){return e.$set(e.editAddDialog,"visible",t)}}},[t("el-form",{ref:"editAddForm",attrs:{"label-position":"left","label-width":"120px",model:e.editAddForm,rules:e.dialogRules}},[t("el-form-item",{attrs:{label:"用户充值金额",prop:"name"}},[t("el-input",{staticStyle:{width:"60%"},attrs:{maxlength:"5"},model:{value:e.editAddForm.amount,callback:function(t){e.$set(e.editAddForm,"amount",t)},expression:"editAddForm.amount"}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-row",{attrs:{type:"flex",justify:"center"}},[t("el-button",{on:{click:function(t){e.editAddDialog.visible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.recharge}},[e._v("充 值")])],1)],1)],1):e._e(),t("el-dialog",{attrs:{title:"开药列表",visible:e.dialogTableVisible,width:"70%"},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.detail.drugOrderList}},[t("el-table-column",{attrs:{prop:"name",label:"药品名称",width:"180"}}),t("el-table-column",{attrs:{prop:"price",label:"药品价格",width:"180"}})],1)]],2),t("el-dialog",{attrs:{title:"开出药单",visible:e.dialogTableVisible2,width:"70%"},on:{"update:visible":function(t){e.dialogTableVisible2=t}}},[t("el-transfer",{attrs:{filterable:"","filter-placeholder":"请输入药品",data:e.drugData},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),t("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.addDrug()}}},[e._v("开药")])],1),t("el-dialog",{attrs:{title:"开出药单",visible:e.dialogTableVisible3,width:"70%"},on:{"update:visible":function(t){e.dialogTableVisible3=t}}},[t("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.loadMore,expression:"loadMore"}],attrs:{"infinite-scroll-disabled":"busy","infinite-scroll-distance":"10"}},e._l(e.data,(function(i){return t("div",{key:i.index},[e._v(e._s(i.name))])})),0)])],1)],1)},a=[],s=(i("14d9"),i("d3b7"),i("159b"),i("caad"),i("a15b"),i("25f0"),i("d81d"),{data:function(){return{listCcs:[],drugData:[],value:[],uploadFileList:[{url:"https://img-blog.csdnimg.cn/f358b00e2d5f44eca9c424864bd943cf.png"}],oldSelectedList:[],detail:{},dialogTableVisible:!1,dialogTableVisible2:!1,dialogTableVisible3:!1,allImageDisable:!1,logoUploadLimit:1,logofilelist:[],logolist:[],options_lvl_type:[{value:"",label:"--请选择--"},{value:"0",label:"司龄"},{value:"1",label:"活跃值"}],options_limit_type:[{value:"",label:"--请选择--"},{value:"0",label:"年限"},{value:"1",label:"分值"}],grantDialog:{visible:!1},grantTable:{tableLoading:!1,list:[],multipleSelection:[],lvl_id:"",u_id:"",cycle_type:"",equity_cycle:"",equity_nm:"",equity_source:"",equity_type:"",img_url:""},table:{tableLoading:!0,list:[],multipleSelection:[],start:0,limit:10,total:0,currentPage:1},searchForm:{name:""},dialog02:{title:"",type:"",user_id:"",dialogFormVisible:!1},dialogForm02:{phone:"",order_id:"",is_see:"",detail:""},editAddForm:{amount:0,name:"",order:"",id:""},editAddDialog:{title:"",type:"",visible:!1},dialogRules:{amount:[{required:!0,message:"请输入充值金额",trigger:"blur"}]},productDialog:{visible:!1},downloadLoading:!1,roles:[],uoloadFileListCcs:[]}},created:function(){this.initDrug(),this.getTableInfo()},methods:{loadMore:function(){var e=this;this.busy=!0,setTimeout((function(){for(var t=0,i=10;t<i;t++)e.data.push({name:e.count++});console.log(e.data),e.busy=!1}),1e3)},initDrug:function(){var e=this;this.ccs.post("getAllDrug").then((function(t){for(var i=0;i<t.rows.length;i++)e.drugData.push({label:t.rows[i].name+"-"+t.rows[i].price+"元",key:t.rows[i].name+"-"+t.rows[i].price+"元"})}))},addDrug:function(){var e=this;console.log("开药---"+this.detail.order_id),console.log("开药---"+this.value);var t=[],i=this.detail.order_id,l=this.value;if(l.length<1)this.$message({message:"请先添加药品",type:"error"});else{for(var a=0;a<l.length;a++){var s=l[a],o={name:s.split("-")[0],price:s.split("-")[1]};t.push(o)}var n={drugList:t,order_id:i};this.ccs.post("insertDrug",n).then((function(t){e.$message({message:t.msg,type:"success"}),e.dialogTableVisible2=!1,e.getTableInfo()}))}},statusFormatter:function(e,t){var i=e.status;return 0==i?"正常":1==i?"冻结":void 0},handlePictureCardPreview:function(e){console.log(e)},recharge:function(){var e=this,t={phone:this.editAddForm.phone,amount:this.editAddForm.amount};this.ccs.post("chnl/rechargeUserAmount",t).then((function(t){e.$message({message:t.msg,type:"success"}),e.editAddDialog.visible=!1,e.getTableInfo()}))},freeze:function(e,t){var i=this,l={userPhone:t.phone};this.ccs.post("freeze",l).then((function(e){i.$message({message:e.msg,type:"success"}),i.getTableInfo()}))},myUpload:function(e){var t=this;console.log("file:"+e);var i=new FormData;i.append("file",e.file),this.ccs.post("upload",i).then((function(e){console.log(e.id),t.uoloadFileListCcs.push(e.id),console.log(t.uoloadFileListCcs)})).catch((function(e){t.$message({type:"error",message:"上传失败！"}),console.log(e)}))},removeUpload:function(e,t){this.uploadFileList=[],this.uoloadFileListCcs=[]},handleSearch:function(){this.table.currentPage=1,this.table.start=0,this.getTableInfo()},handleSearchClear:function(){this.searchForm.lvl_num="",this.searchForm.lvl_name="",this.searchForm.lvl_type=""},handleEdit:function(e,t){var i=this;this.editAddForm.phone=t.phone,this.editAddDialog.type="edit",this.editAddDialog.visible=!0,console.log(t.lvl_img_url),this.$nextTick((function(){i.$refs["editAddForm"].clearValidate()}))},getTableInfo:function(){var e=this;this.table.tableLoading=!0;var t={phone:this.searchForm.phone,start:this.table.start,limit:this.table.limit,doctor_id:sessionStorage.getItem("doctor_id")};this.ccs.post("/getUserFallPage",t).then((function(t){"ccs"!=t.code&&t.rows&&Array.isArray(t.rows)?(e.table.tableLoading=!1,e.table.list=t.rows,e.table.total=t.total||0):e.$message({type:"error",message:"查询失败"})})).catch((function(t){e.$message({type:"error",message:"查询失败"}),console.log(t)}))},handleRemove:function(e,t){var i=this;this.$confirm("是否将会员等级删除".concat(t.lvl_id,"?"),"提示",{cancelButtonText:"取消",confirmButtonText:"确定",type:"warning"}).then((function(){removeRow({params:{lvl_id:t.lvl_id}}).then((function(e){e.header.msg?i.$message.error(e.header.msg):(i.$message({message:"会员等级删除成功",type:"success"}),i.getTableInfo())})).catch((function(e){console.error(e)}))}))},handleDtl:function(e,t){this.detail=t,this.dialogTableVisible=!0},handleDtl2:function(e,t){this.detail=t,this.dialogTableVisible2=!0},handleDtl3:function(e,t){this.detail=t,this.dialogTableVisible3=!0,loadMore()},getDtl:function(e){var t=this;rowDtl({params:{lvl_id:e}}).then((function(e){e.header.msg?t.$message({type:"warning",message:e.header.msg}):(t.detail=e.body.rows,t.dialogTableVisible=!0)}))},handleSubmit:function(){var e=this;this.$refs["editAddForm"].validate((function(t){if(t)if("add"===e.editAddDialog.type){var i={name:e.editAddForm.name,order_num:e.editAddForm.order_num,img_id:e.uoloadFileListCcs[0]};e.ccs.post("/addClassify",i).then((function(t){"ccs"!=t.code?(e.$message({message:"保存成功",type:"success"}),e.editAddDialog.visible=!1,e.getTableInfo()):e.$message({type:"error",message:"保存失败"})})).catch((function(t){e.$message({type:"error",message:"保存失败"}),console.log(t)}))}else{var l={name:e.editAddForm.name,order_num:e.editAddForm.order_num,img_id:e.uoloadFileListCcs[0],id:e.editAddForm.id};e.ccs.post("/editClassify",l).then((function(t){"ccs"!=t.code?(e.$message({message:"编辑成功",type:"success"}),e.editAddDialog.visible=!1,e.getTableInfo()):e.$message({type:"error",message:"编辑失败"})})).catch((function(t){e.$message({type:"error",message:"编辑失败"}),console.log(t)}))}}))},handleGrant:function(e,t){var i=this;this.grantTable.lvl_id=t.lvl_id;var l=t.u_id?t.u_id.split(","):[];this.grantDialog.visible=!0,this.oldSelectedList=[],this.$nextTick((function(){i.$refs.grantTable.clearSelection();for(var e=0;e<l.length;e++)for(var t=0;t<i.grantTable.list.length;t++)if(l[e]===i.grantTable.list[t].u_id){i.oldSelectedList.push(i.grantTable.list[t]),i.$refs.grantTable.toggleRowSelection(i.grantTable.list[t]);break}}))},handleGrantSubmit:function(){var e=this,t=[],i=[],l=[];this.grantTable.multipleSelection.forEach((function(t){var a=!1;e.oldSelectedList.forEach((function(e){e.u_id===t.u_id&&(l.push(t.u_id),console.log("保存后的多选框是:",t.u_id),a=!0)})),a||(i.push(t.u_id),console.log("增加的勾选是:",i))})),0===l.length?this.oldSelectedList.forEach((function(e){t.push(e.u_id)})):this.oldSelectedList.forEach((function(e){l.includes(e.u_id)||t.push(e.u_id)}));var a={equity_del_ids:t.join(","),equity_add_ids:i.join(","),lvl_id:this.grantTable.lvl_id};console.log("需要删除的集合是:",t),console.log("需要添加的集合是:",i),console.log("等级编号id是:",this.grantTable.lvl_id),saveGrant({params:a}).then((function(t){e.grantDialog.visible=!1,"1"!==t.header.retcode?e.$message.error({message:t.header.msg}):(e.$message({message:"授权保存成功",type:"success"}),e.getTableInfo())})).catch((function(t){e.grantDialog.visible=!1,console.error(t)}))},getRightsTableInfo:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=this;return new Promise((function(t,i){var l={equity_nm:"",cycle_type:"",equity_type:"",u_id:"",start:e.table.start,limit:e.table.limit};console.log("getRightsTableInfo params: ",l),getRightsTableInfo({params:l}).then((function(i){if(i.header.msg)e.$alert(i.header.msg,"提示",{confirmButtonText:"确定"});else{var l=i.body;console.log("getRoleTableInfo data: ",l);var a=l.rows;if(l.rows&&Array.isArray(l.rows)){for(var s=0;s<a.length;s++){var o=a[s];e.grantTable.list.push({order_id:o.order_id,fall_time:o.fall_time,is_see:o.is_see,detail:o.detail,phone:o.phone,create_time:o.create_time})}e.grantTable.list.length<l.totalCount||t()}}})).catch((function(e){console.error(e),i(e)}))}))})),handleSizeChange:function(e){this.table.currentPage=1,this.table.start=0,this.table.limit=e,this.getTableInfo()},handleCurrentChange:function(e){this.table.start=(e-1)*this.table.limit,this.getTableInfo()},formatJson:function(e,t){return t.map((function(t){return e.map((function(e){return t[e]}))}))},handleGrantSelectionChange:function(e){this.grantTable.multipleSelection=e},onLogoChange:function(e){this.logolist=e},handleRemoveLogo:function(e){this.logoWaitUpFlag=!0,this.editAddForm.lvl_img_url="","success"===e.status&&this.form.del_id.push(e.u_id)},uploadLogoSuccess:function(e){var t=this;e&&(this.editAddForm.lvl_img_url=e[0],this.$notify({message:"上传图片成功",type:"success"}),this.allImageDisable=!1,this.$nextTick((function(){t.submitLogoSuccess()})))},submitAddEdit:function(){this.handleSubmit()},submitLogo:function(){this.$refs.logoRef.submit()},submitLogoSuccess:function(){this.handleSubmit()}}}),o=s,n=i("2877"),r=Object(n["a"])(o,l,a,!1,null,null,null);t["default"]=r.exports}}]);