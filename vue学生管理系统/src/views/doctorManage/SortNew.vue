<template>
  <el-container>
    <el-main>
      <!-- <el-form
        ref="searchForm"
        :model="searchForm"
        label-width="120px"
        class="search-form"
      >
        <el-row :gutter="20">
          <el-col :span="18">
            <el-row class="param-row">
              <el-col :span="8">
                <el-form-item
                  label="分类名称"
                  prop="name"
                >
                  <el-input
                    v-model="searchForm.name"
                    maxlength="60"
                  />
                </el-form-item>
              </el-col>
            </el-row>
             <el-row class="param-row">

            </el-row>
          </el-col>
          <el-col :span="6">
            <el-row
              type="flex"
              justify="center"
            >
              <el-button
                type="primary"
                @click="handleSearch"
              >查询</el-button>
              <el-button @click="handleSearchClear">清空</el-button>
            </el-row>
          </el-col>
        </el-row>
      </el-form> -->
      <div class="content">
        <el-alert
          title
          type="info"
          class="alert"
          :closable="false"
        >
          <div class="left">
            商品分类列表
          </div>
          <div class="right">
            <el-button
              size="mini"
              type="primary"
              @click="handleAdd"
            >
              <i class="el-icon-plus" />
              新增
            </el-button>
            <!-- <el-button
              :loading="downloadLoading"
              size="mini"
              type="primary"
              @click="handleDownload"
            >
              <i class="el-icon-download" />
              导出
            </el-button> -->
          </div>
        </el-alert>
        <!-- 角色列表 开始 -->
        <el-table
          v-loading="table.tableLoading"
          :data="table.list"
          class="table"
          border
        >
          <!--会员等级展示的列表列名称-->
          <!-- <el-table-column label="会员等级编号" min-width="80">
            <template slot-scope="scope">
              <span>{{ scope.row.lvl_id }}</span>
            </template>
          </el-table-column> -->
          <el-table-column
            label="商品分类序号"
            min-width="80"
          >
            <template slot-scope="scope">
              <span>{{ scope.row.id }}</span>
            </template>
          </el-table-column>

          <el-table-column
            label="商品分类名称"
            min-width="80"
          >
            <template slot-scope="scope">
              <span>{{ scope.row.name }}</span>
            </template>
          </el-table-column>

          <el-table-column
            label="商品分类排序"
            min-width="80"
          >
            <template slot-scope="scope">
              <span>{{ scope.row.order_num }}</span>
            </template>
          </el-table-column>

          <el-table-column
            label="分类图片"
            min-width="120"
          >
            <template slot-scope="scope">
              <el-image
                style="width: 150px; height: 75px"
                :src="scope.row.img"
              />
            </template>
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="360"
          >
          
            <template slot-scope="scope">
               <el-button
                size="mini"
                type="primary"
                @click="handleEdit(scope.$index, scope.row)"
              >修改</el-button>
              <el-button
                size="mini"
                type="primary"
                @click="handleRemove(scope.$index, scope.row)"
              >删除</el-button>

             
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          class="pagination"
          background
          :current-page.sync="table.currentPage"
          :page-sizes="[10, 20, 30, 50, 100, 200]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="table.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>

      <!-- 新增/修改 弹框开始 -->
      <el-dialog
        v-if="editAddDialog.visible"
        :title="editAddDialog.title"
        :visible.sync="editAddDialog.visible"
        width="50%"
      >
        <el-form
          ref="editAddForm"
          label-position="left"
          label-width="120px"
          :model="editAddForm"
          :rules="dialogRules"
        >
          <el-form-item
            label="商品分类名称"
            prop="name"
          >
            <el-input
              v-model="editAddForm.name"
              maxlength="5"
              style="width:60%"
            />
          </el-form-item>

           <el-form-item
            label="商品排序"
            prop="order"
          >
            <el-input
              v-model="editAddForm.order_num"
              maxlength="5"
              style="width:60%"
            />
          </el-form-item>
         
          <!-- action="https://jsonplaceholder.typicode.com/posts/" -->
          <el-form-item label="轮播图" prop="lvl_img_url">
                <el-upload
                    action="http://127.0.0.1:8080/api/upload"
                    :http-request="myUpload"
                    :on-remove	="removeUpload"
                    :limit="1"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :file-list="uploadFileList"
                    :on-success="uploadSuccess">
                    <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-form-item>
         
        </el-form>
        <div
          slot="footer"
          class="dialog-footer"
        >
          <el-row
            type="flex"
            justify="center"
          >
            <el-button @click="editAddDialog.visible = false">取 消</el-button>
            <el-button
              type="primary"
              @click="submitAddEdit"
            >保 存</el-button>
          </el-row>
        </div>
      </el-dialog>

      
    </el-main>
  </el-container>
</template>
<script>
// import {
//   getTableInfo,
//   removeRow,
//   addRole,
//   editRole,f
//   rowDtl,
//   exportMember,
//   getRightsTableInfo,
//   saveGrant,
// } from "@/api/userMemberGrade";
// import Upload from "@/components/Upload";
// import { parseTime } from "@/utils";

export default {
  // 加载组件
  // components: {
  //   Upload,
  // },

  // name: 'HotProduct',
  data() {
    return {
      //上传过的文件
      uploadFileList:[{url:'https://img-blog.csdnimg.cn/f358b00e2d5f44eca9c424864bd943cf.png'}],
      // 初始化旧的所选数据集合
      oldSelectedList: [],
      // 查看等级线下的权益详情

      detail: [],
      dialogTableVisible: false,

      allImageDisable: false,
      // 上限
      logoUploadLimit: 1,
      // 图片列表
      logofilelist: [], // 已upload
      logolist: [], // 未upload

      options_lvl_type: [
        {
          value: "",
          label: "--请选择--",
        },
        {
          value: "0",
          label: "司龄",
        },
        {
          value: "1",
          label: "活跃值",
        },
      ],
      options_limit_type: [
        {
          value: "",
          label: "--请选择--",
        },
        {
          value: "0",
          label: "年限",
        },
        {
          value: "1",
          label: "分值",
        },
      ],
      grantDialog: {
        visible: false,
      },
      grantTable: {
        tableLoading: false,
        list: [],
        multipleSelection: [],
        lvl_id: "",
        u_id: "",
        cycle_type: "",
        equity_cycle: "",
        equity_nm: "",
        equity_source: "",
        equity_type: "",
        img_url: "",
      },
      table: {
        tableLoading: true,
        list: [],
        multipleSelection: [],
        start: 0,
        limit: 10,
        total: 0,
        currentPage: 1,
      },
      searchForm: {
        name:''
      },
      dialog02: {
        title: "",
        type: "",
        user_id: "",
        dialogFormVisible: false,
      },
      // dialogForm02: {
      //   lvl_id: '',
      //   lvl_num: '',
      //   lvl_type: '',
      //   lvl_name: '',
      //   lvl_limit: '',
      //   limit_type: '',
      //   lvl_img_url: '',
      //   lvl_validity: ''
      // },
      // mcd商品分类
      editAddForm: {
       name:'',//分类名称
       order:'',//分类排序
       id:'',//分类id
      },
      editAddDialog: {
        title: "",
        type: "",
        visible: false,
      },
      dialogRules: {
        name: [
          { required: true, message: "请输入商品分类名称", trigger: "blur" },
        ],
        order_num: [
          { required: true, message: "请输入商品分类排序", trigger: "blur" },
        ],
        img_id: [
          { required: true, message: "请上传图片", trigger: "blur" },
        ],
      },
      productDialog: {
        visible: false,
      },
      downloadLoading: false,
      roles: [],
      uoloadFileListCcs:[]
    };
  },
  created() {
    this.getTableInfo();
    // this.grantTable.list = [];
    // this.getRightsTableInfo();
  },

  // 加载方法初始化
  methods: {
    //上传图片数组
    handlePictureCardPreview(file){
      console.log(file)
    },
    //自定义上传，解决跨域问题
    myUpload(content) {
      console.log('file:'+content)
        let formData = new FormData();
        formData.append('file',content.file); // 'file[]' 代表数组 其中`file`是可变的
        this.ccs.post('upload', formData).then(rs=>{
         console.log(rs.id)
         this.uoloadFileListCcs.push(rs.id)
         console.log(this.uoloadFileListCcs)
        }).catch(err=>{
          this.$message({
            type: 'error',
            message: '上传失败！'
            })
          console.log(err)
        })
      },
   //删除图片
   removeUpload(file,fileList){
    this.uploadFileList=[]
    this.uoloadFileListCcs=[]
   },
    // 查询
    handleSearch() {
      this.table.currentPage = 1;
      this.table.start = 0;
      this.getTableInfo();
    },
    handleSearchClear() {
      this.searchForm.lvl_num = "";
      this.searchForm.lvl_name = "";
      this.searchForm.lvl_type = "";
    },
    // 商品分类--新增初始化
    handleAdd() {
      // this.v.role_nm = ''
      this.editAddForm.name='',
      this.editAddForm.order =''
      this.uoloadFileListCcs =[],
      this.uploadFileList =[],
      this.editAddDialog.title = "新增商品分类";
      this.editAddDialog.type = "add";
      this.editAddDialog.visible = true;
      // if (this.$refs.logoRef) {
      //   this.$refs.logoRef.clearFiles();
      // }
      // this.$nextTick(() => {
      //   this.$refs["editAddForm"].clearValidate();
      // });
    },
    // 修改商品分类--编辑初始化
    handleEdit(index, row) {
      this.editAddForm.name = row.name;
      this.editAddForm.order_num = row.order_num;
      this.editAddForm.id =row.id
      this.uoloadFileListCcs =[] //刷新上传图片的数组
      this.editAddDialog.title = "修改商品分类";
      this.editAddDialog.type = "edit";
      this.editAddDialog.visible = true;
      this.logolist.length = 0;
      console.log(row.lvl_img_url);
      // if (this.$refs.logoRef) {
      //   this.$refs.logoRef.clearFiles()
      // }
      // this.logofilelist = [{ url: row.lvl_img_url }]
      this.uploadFileList = [];
      this.uploadFileList.push({
        u_id: "",
        url: row.img,
      });

      this.$nextTick(() => {
        this.$refs["editAddForm"].clearValidate();
      });
    },
    getTableInfo() {
      this.table.tableLoading = true;
        // url: 'NTMBizMember/iwap.ctrl',
       const  params = {
          // 分类名称
          name: this.searchForm.name,
          start: this.table.start,
          limit: this.table.limit,
        }
       
    this.ccs.post('/getClassify', params).then(rs=>{
            if(rs.code!='ccs'&&rs.rows && Array.isArray(rs.rows)){
               this.table.tableLoading = false;
               this.table.list = rs.rows;
               this.table.total = rs.total || 0;
            }else{
              this.$message({
            type: 'error',
            message: '查询失败'
            })
            }
        }).catch(err=>{
         this.$message({
            type: 'error',
            message: '查询失败'
            })
          console.log(err)
        })
        // .then((response) => {
        //   this.table.tableLoading = false;
        //   if (response.header.msg) {
        //     this.$notify({
        //       title: "提示",
        //       message: response.header.msg,
        //       type: "warning",
        //     });
        //   } else {
        //     const data = response.body;
        //     if (data.rows && Array.isArray(data.rows)) {
        //       this.table.list = data.rows;
        //       this.table.total = data.total || 0;
        //     }
        //   }
        // })
        // .catch((err) => {
        //   console.error(err);
        // });
    },
    // 删除会员等级
    handleRemove(el, row) {
      this.$confirm(`是否将商品分类删除${row.id}?`, "提示", {
        cancelButtonText: "取消",
        confirmButtonText: "确定",
        type: "warning",
      }).then(() => {
        const  params = {
          // 分类名称
          id: row.id,
        }
         this.ccs.post('/deleteClassify', params).then(rs=>{
            if(rs.code!='ccs'){
              this.getTableInfo();
            }else{
              this.$message({
            type: 'error',
            message: '删除失败'
            })
            }
        }).catch(err=>{
         this.$message({
            type: 'error',
            message: '删除失败'
            })
          console.log(err)
        })
      });
    },
    // 查看详情
    handleDtl(el, rows) {
      this.getDtl(rows.lvl_id);
    },
    getDtl(lvl_id) {
      rowDtl({
        params: {
          lvl_id: lvl_id,
        },
      }).then((resp) => {
        if (!resp.header.msg) {
          this.detail = resp.body.rows;
          this.dialogTableVisible = true;
        } else {
          this.$message({
            type: "warning",
            message: resp.header.msg,
          });
        }
      });
    },
    // 提交角色新增或编辑
    handleSubmit() {
      this.$refs["editAddForm"].validate((valid) => {
        if (valid) {
          if (this.editAddDialog.type === "add") {
            // 新增
            const params = {
              name: this.editAddForm.name,
              order_num: this.editAddForm.order_num,
              img_id: this.uoloadFileListCcs[0],
            };
            this.ccs.post('/addClassify', params).then(rs=>{
            if(rs.code!='ccs'){
              this.$message({
                    message: "保存成功",
                    type: "success",
                  });
                  this.editAddDialog.visible = false;
                  this.getTableInfo();
            }else{
              this.$message({
            type: 'error',
            message: '保存失败'
            })
            }
        }).catch(err=>{
         this.$message({
            type: 'error',
            message: '保存失败'
            })
          console.log(err)
        })
       } else {
            // 修改
            const params = {
              name: this.editAddForm.name,
              order_num: this.editAddForm.order_num,
              img_id: this.uoloadFileListCcs[0],
              id:this.editAddForm.id
            };
            this.ccs.post('/editClassify', params).then(rs=>{
            if(rs.code!='ccs'){
              this.$message({
                    message: "编辑成功",
                    type: "success",
                  });
                  this.editAddDialog.visible = false;
                  this.getTableInfo();
            }else{
               this.$message({
            type: 'error',
            message: '编辑失败'
            })
            }
        }).catch(err=>{
           this.$message({
            type: 'error',
            message: '编辑失败'
            })
          console.log(err)
        })
         }
       }
        
      });
    },
    handleGrant(index, row) {
      // 查询选择权益列表信息
      // console.log("数据是：",row)

      this.grantTable.lvl_id = row.lvl_id;
      const grants = row.u_id ? row.u_id.split(",") : [];
      this.grantDialog.visible = true;
      this.oldSelectedList = [];
      this.$nextTick(() => {
        this.$refs.grantTable.clearSelection();
        for (let i = 0; i < grants.length; i++) {
          for (let j = 0; j < this.grantTable.list.length; j++) {
            if (grants[i] === this.grantTable.list[j].u_id) {
              this.oldSelectedList.push(this.grantTable.list[j]);
              this.$refs.grantTable.toggleRowSelection(this.grantTable.list[j]);
              break;
            }
          }
        }
      });
    },
    handleGrantSubmit() {
      // 提交授权
      const del_id_arr = [];
      const add_id_arr = [];
      const same_arr = [];

      this.grantTable.multipleSelection.forEach((item) => {
        let had = false;
        this.oldSelectedList.forEach((item2) => {
          if (item2.u_id === item.u_id) {
            same_arr.push(item.u_id);
            console.log("保存后的多选框是:", item.u_id);
            had = true;
          }
        });
        if (!had) {
          add_id_arr.push(item.u_id);
          console.log("增加的勾选是:", add_id_arr);
        }
      });

      if (same_arr.length === 0) {
        this.oldSelectedList.forEach((ele) => {
          del_id_arr.push(ele.u_id);
        });
      } else {
        this.oldSelectedList.forEach((ele) => {
          if (!same_arr.includes(ele.u_id)) {
            del_id_arr.push(ele.u_id);
          }
        });
      }

      // 首先获取等级编号Id 和 权益编号的集合
      const params = {
        equity_del_ids: del_id_arr.join(","), // 需要删除的等级权益数据
        equity_add_ids: add_id_arr.join(","), // 需要提那家的等级权益数据
        lvl_id: this.grantTable.lvl_id, // 等级编号Id
        // u_id: add_id_arr.join(',')
      };
      console.log("需要删除的集合是:", del_id_arr);
      console.log("需要添加的集合是:", add_id_arr);
      console.log("等级编号id是:", this.grantTable.lvl_id);

      saveGrant({
        params: params,
      })
        .then((response) => {
          this.grantDialog.visible = false;
          if (response.header.retcode !== "1") {
            this.$message.error({
              message: response.header.msg,
            });
          } else {
            this.$message({
              message: "授权保存成功",
              type: "success",
            });
            this.getTableInfo();
          }
        })
        .catch((err) => {
          this.grantDialog.visible = false;
          console.error(err);
        });
    },

    // 权益列表查询--请求
    getRightsTableInfo() {
      return new Promise((resolve, reject) => {
        const params = {
          equity_nm: "",
          cycle_type: "",
          equity_type: "",
          u_id: "",
          start: this.table.start,
          limit: this.table.limit,
        };
        console.log("getRightsTableInfo params: ", params);
        // debugger
        getRightsTableInfo({
          params: params,
        })
          .then((response) => {
            if (response.header.msg) {
              this.$alert(response.header.msg, "提示", {
                confirmButtonText: "确定",
              });
            } else {
              const data = response.body;
              console.log("getRoleTableInfo data: ", data);
              // debugger
              const rowsList = data.rows;
              if (data.rows && Array.isArray(data.rows)) {
                for (let index = 0; index < rowsList.length; index++) {
                  const element = rowsList[index];
                  this.grantTable.list.push({
                    u_id: element.u_id,
                    equity_nm: element.equity_nm,
                    cycle_type: element.cycle_type,
                    equity_cycle: element.equity_cycle,
                    equity_type: element.equity_type,
                    equity_source: element.equity_source,
                    img_url: element.img_url,
                  });
                }
                if (this.grantTable.list.length < data.totalCount) {
                  // this.getRoleTableInfo(start + limit)
                } else {
                  resolve();
                }
              }
            }
          })
          .catch((err) => {
            console.error(err);
            reject(err);
          });
      });
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`)
      this.table.currentPage = 1;
      this.table.start = 0;
      this.table.limit = val;
      this.getTableInfo();
    },
    // 会员等级列表--页码
    handleCurrentChange(val) {
      this.table.start = (val - 1) * this.table.limit;
      this.getTableInfo();
      // console.log(`当前页: ${val}`)
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map((v) =>
        filterVal.map((j) => {
          return v[j];
        })
      );
    },
    // 权益多选框 handleSelectionChange
    handleGrantSelectionChange(val) {
      this.grantTable.multipleSelection = val;
    },
    onLogoChange(filelist) {
      this.logolist = filelist;
    },
    handleRemoveLogo(file) {
      this.logoWaitUpFlag = true;
      this.editAddForm.lvl_img_url = "";
      if (file.status === "success") {
        this.form.del_id.push(file.u_id);
      }
    },
    uploadLogoSuccess(uploadFile) {
      if (uploadFile) {
        // uploadFile为数组，如上传多张图片，含有多个元素
        this.editAddForm.lvl_img_url = uploadFile[0]; // 新上传的logo记录
        this.$notify({
          message: "上传图片成功",
          type: "success",
        });
        this.allImageDisable = false;
        this.$nextTick(() => {
          // todo:添加上传图片成功代码
          this.submitLogoSuccess();
        });
      }
    },
    submitAddEdit() {
     this.handleSubmit();
    },
    // 上传图片到后台
    submitLogo() {
      this.$refs.logoRef.submit();
    },
    // 上传图片成功处理
    submitLogoSuccess() {
      this.handleSubmit();
    },
  },
};
</script>

