webpackJsonp([68],{"8uQV":function(e,t,a){"use strict";function r(e){a("K2OD")}Object.defineProperty(t,"__esModule",{value:!0});var o=a("mvHQ"),s=a.n(o),l=a("jtw6"),n=a("QmSG"),c={components:{},data:function(){return{tableData:[],tabletotal:0,currentPage:1,pagesize:n.pagesize,pageformat:n.pageformat,listQuery:{limit:n.LIMIT,offset:"",search:""},Dns_Status:{0:"使用中",1:"备用",2:"被墙"},Dns_Color:{0:"success",1:"warning",2:"danger"},Dns_Types:["dnspod","godaddy"],addForm:!1,rowdata:{status:"",use:"",desc:""},selectdomain:{},addRecordForm:!1,recordForm:{domain:"",name:"",value:"",type:"A",ttl:600,use:"",desc:""},record_types:["A","CNAME","MX","TXT"],editRecordForm:!1,recorddata:{}}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;Object(l.d)(this.listQuery).then(function(t){e.tableData=t.data.results,e.tabletotal=t.data.count,e.tableData.map(function(e){var t={domain__name:e.name};Object(l.e)(t).then(function(t){e.recordData=t.data})})})},searchClick:function(){this.fetchData()},handleSizeChange:function(e){this.listQuery.limit=e,this.fetchData()},handleCurrentChange:function(e){this.listQuery.offset=(e-1)*n.LIMIT,this.fetchData()},syncGroup:function(e){var t=this;e.action="sync",e.domain=e.name,this.$message({message:"正在同步中，请稍后",type:"info"}),"dnspod"===e.type?Object(l.o)(e).then(function(){t.$message({message:"同步成功",type:"success"}),t.fetchData()}):"godaddy"===e.type&&Object(l.p)(e).then(function(){t.$message({message:"同步成功",type:"success"}),t.fetchData()})},updateDesc:function(e){this.addForm=!0,this.rowdata=e},changeDesc:function(){var e=this;Object(l.k)(this.rowdata.id,this.rowdata).then(function(){e.$message({message:"更新成功",type:"success"}),e.addForm=!1,e.fetchData()})},addGroup:function(e){this.recordForm.domain=e.name,this.recordForm.dnsname=e.dnsname,this.recordForm.domain_type=e.type,this.addRecordForm=!0},addDnsRecord:function(){var e=this,t=this.$loading({lock:!0,text:"正在火速连接api添加，请稍等。。。",background:"rgba(0, 0, 0, 0.7)"});Object(l.m)(this.recordForm).then(function(){t.close(),e.fetchData(),e.addRecordForm=!1}).catch(function(t){var a=s()(t.response.data);e.$message.error(a)})},editGroup:function(e){this.recorddata=e,this.editRecordForm=!0},editDnsRecord:function(){var e=this,t=this.$loading({lock:!0,text:"正在火速连接api修改，请稍等。。。",background:"rgba(0, 0, 0, 0.7)"});Object(l.q)(this.recorddata.id,this.recorddata).then(function(){t.close(),e.fetchData(),e.editRecordForm=!1}).catch(function(t){var a=s()(t.response.data);e.$message.error(a)})}}},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[a("el-card",[a("div",{staticClass:"head-lavel"},[a("div",{staticClass:"table-button"}),e._v(" "),a("div",{staticClass:"table-search"},[a("el-input",{attrs:{placeholder:"搜索 ..."},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.searchClick(t)}},model:{value:e.listQuery.search,callback:function(t){e.$set(e.listQuery,"search",t)},expression:"listQuery.search"}},[a("i",{staticClass:"el-icon-search el-input__icon",attrs:{slot:"suffix"},on:{click:e.searchClick},slot:"suffix"})])],1)]),e._v(" "),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{label:"记录",type:"expand",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.row.recordData,border:""}},[a("el-table-column",{attrs:{prop:"name",label:"名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"type",label:"类型"}}),e._v(" "),a("el-table-column",{attrs:{prop:"value",label:"值"}}),e._v(" "),a("el-table-column",{attrs:{prop:"ttl",label:"ttl"}}),e._v(" "),a("el-table-column",{attrs:{prop:"use",label:"用途"}}),e._v(" "),a("el-table-column",{attrs:{prop:"desc",label:"备注"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[["NS","SOA"].indexOf(t.row.type)<0?a("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(a){e.editGroup(t.row)}}},[e._v("修改\n                  ")]):e._e()]}}])})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"名称",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"dnsname",label:"属于",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"create_time",label:"注册时间",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[a("span",[e._v(e._s(e._f("parseDate")(t.row.create_time)))])])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"expire_time",label:"到期时间",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[a("span",[e._v(e._s(e._f("parseDate")(t.row.expire_time)))])])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"到期天数",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[a("span",[e._v(e._s(e._f("diffDate")(t.row.expire_time)))])])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{type:e.Dns_Color[t.row.status]}},[e._v("\n                "+e._s(e.Dns_Status[t.row.status])+"\n              ")])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"update_time",label:"修改时间",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[a("span",[e._v(e._s(e._f("parseDate")(t.row.update_time)))])])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"dnsService",label:"dns服务商",width:"260"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},e._l(t.row.dnsService.split("|"),function(t){return a("el-tag",{key:t},[e._v("\n                "+e._s(t)+"\n              ")])}))]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"desc",label:"备注"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"260"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button-group",[a("el-button",{attrs:{type:"warning",size:"mini"},on:{click:function(a){e.syncGroup(t.row)}}},[e._v("同步记录")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.addGroup(t.row)}}},[e._v("添加记录")]),e._v(" "),a("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(a){e.updateDesc(t.row)}}},[e._v("修改")])],1)]}}])})],1)],1),e._v(" "),a("div",{staticClass:"table-pagination"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pagesize,"page-size":e.listQuery.limit,layout:e.pageformat,total:e.tabletotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}})],1)]),e._v(" "),a("el-dialog",{attrs:{visible:e.addForm},on:{"update:visible":function(t){e.addForm=t}}},[a("el-form",{attrs:{"label-width":"90px"}},[a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-radio-group",{model:{value:e.rowdata.status,callback:function(t){e.$set(e.rowdata,"status",t)},expression:"rowdata.status"}},e._l(Object.keys(e.Dns_Status),function(t){return a("el-radio",{key:t,attrs:{label:t}},[e._v(e._s(e.Dns_Status[t]))])}))],1),e._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"desc"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.rowdata.desc,callback:function(t){e.$set(e.rowdata,"desc",t)},expression:"rowdata.desc"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.changeDesc}},[e._v("确 定")])],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.addRecordForm},on:{"update:visible":function(t){e.addRecordForm=t}}},[a("el-form",{ref:"recordForm",attrs:{model:e.recordForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{model:{value:e.recordForm.name,callback:function(t){e.$set(e.recordForm,"name",t)},expression:"recordForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类型",prop:"type"}},[a("el-select",{attrs:{placeholder:"请选择类型"},model:{value:e.recordForm.type,callback:function(t){e.$set(e.recordForm,"type",t)},expression:"recordForm.type"}},e._l(e.record_types,function(e){return a("el-option",{key:e.id,attrs:{value:e}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"ip",prop:"value"}},[a("el-input",{model:{value:e.recordForm.value,callback:function(t){e.$set(e.recordForm,"value",t)},expression:"recordForm.value"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"ttl",prop:"ttl"}},[a("el-input",{model:{value:e.recordForm.ttl,callback:function(t){e.$set(e.recordForm,"ttl",t)},expression:"recordForm.ttl"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"用途",prop:"use"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.recordForm.use,callback:function(t){e.$set(e.recordForm,"use",t)},expression:"recordForm.use"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"desc"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.recordForm.desc,callback:function(t){e.$set(e.recordForm,"desc",t)},expression:"recordForm.desc"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addDnsRecord("recordForm")}}},[e._v("立即创建")])],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.editRecordForm},on:{"update:visible":function(t){e.editRecordForm=t}}},[a("el-form",{ref:"recorddata",attrs:{model:e.recorddata,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"ip",prop:"value"}},[a("el-input",{model:{value:e.recorddata.value,callback:function(t){e.$set(e.recorddata,"value",t)},expression:"recorddata.value"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"ttl",prop:"ttl"}},[a("el-input",{model:{value:e.recorddata.ttl,callback:function(t){e.$set(e.recorddata,"ttl",t)},expression:"recorddata.ttl"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"用途",prop:"use"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.recorddata.use,callback:function(t){e.$set(e.recorddata,"use",t)},expression:"recorddata.use"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"desc"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.recorddata.desc,callback:function(t){e.$set(e.recorddata,"desc",t)},expression:"recorddata.desc"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.editDnsRecord("recorddata")}}},[e._v("立即创建")])],1)],1)],1)],1)},d=[],u={render:i,staticRenderFns:d},p=u,m=a("VU/8"),f=r,b=m(c,p,!1,f,null,null);t.default=b.exports},K2OD:function(e,t,a){var r=a("Ma2w");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("80b8f4be",r,!0)},Ma2w:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,"",""])}});