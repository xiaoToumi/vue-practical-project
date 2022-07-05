<template>
  <div class="infoList">
    <el-form
      :inline="true"
      class="demo-form-inline"
      size="small"
    >
    <el-form-item>
        <el-button type="primary" @click="addStudent">新增</el-button>
    </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="姓名" align="center">
      </el-table-column>
      <el-table-column prop="age" label="年龄" align="center">
      </el-table-column>
      <el-table-column prop="sex_text" label="性别" align="center">
      </el-table-column>
      <el-table-column prop="father" label="父亲姓名" align="center">
      </el-table-column>
      <el-table-column prop="mather" label="母亲姓名" align="center">
      </el-table-column>
      <el-table-column prop="time" label="入校时间" align="center">
      </el-table-column>
      <el-table-column prop="address" label="家庭住址" align="center">
      </el-table-column>
      <el-table-column prop="phone" label="联系方式" align="center">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <!-- 修改 -->
          <el-button
            type="danger"
            size="mini"
            icon="el-icon-edit"
            @click="edit(scope.row)"
          ></el-button>
          <!-- 删除 -->
          <el-button
            type="danger"
            size="mini"
            icon="el-icon-delete"
            @click="del(scope.row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 添加学生信息弹窗 -->
    <el-dialog :title="state ? '添加学生信息' : '修改学生信息' " :visible.sync="dialogFormVisible" width="500px">
        <el-form :model="form" :rules="rules" ref="form">
            <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
                <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="年龄" :label-width="formLabelWidth" prop="age">
                <el-input v-model="form.age" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="性别" :label-width="formLabelWidth" prop="sex">
                <el-radio v-model="form.sex" label="1">男</el-radio>
                <el-radio v-model="form.sex" label="2">女</el-radio>
            </el-form-item>
            <el-form-item label="父亲姓名" :label-width="formLabelWidth" prop="father">
                <el-input v-model="form.father" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="母亲姓名" :label-width="formLabelWidth" prop="mather">
                <el-input v-model="form.mather" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="入校时间" :label-width="formLabelWidth" prop="time">
                <el-date-picker
                    v-model="form.time"
                    format="yyyy 年 MM 月 dd 日"
                    value-format="yyyy-MM-dd"
                    type="date"
                    placeholder="选择日期"
                    >
                </el-date-picker>
            </el-form-item>
            <el-form-item label="家庭住址" :label-width="formLabelWidth" prop="address">
                <el-input v-model="form.address" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="联系方式" :label-width="formLabelWidth" prop="phone">
                <el-input v-model="form.phone" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="closeInfo('form')">取 消</el-button>
            <el-button type="primary" @click="sure('form')">确 定</el-button>
        </div>
    </el-dialog>
  </div>
</template>

<script>
    import { info,getInfo,infoDel } from '@/api/api.js'

    export default {
        name: "infoList",
        data() {
            return {
                tableData: [],
                dialogFormVisible:false,
                form:{
                    name:"",
                    age:"",
                    sex:"1",
                    father:"",
                    mather:"",
                    time:"",
                    address:"",
                    phone:"",
                },
                rules:{
                    name:[{required:true, message:'请输入姓名'}],
                    age:[{required:true}],
                    sex:[{required:true, message:'请输入年龄'}],
                    time:[{required:true, message:'请输入入校时间'}],
                    address:[{required:true, message:'请输入家庭住址'}],
                    phone:[{required:true, message:'请输入联系方式'}],
                },
                formLabelWidth:"80px",
                total:0,
                state:true,
            };
        },
        created(){
            this.getData()
        },
        methods: {
            //查询方法封装
            getData(){
                getInfo().then(res => {
                    if(res.data.status === 200 ){
                        this.tableData = res.data.data
                        this.total = res.data.total
                        this.tableData.forEach(item => {
                            //将item.sex修改为item.sex_text,避免修改原数据
                            item.sex === "1" ? item.sex_text = '男' : item.sex_text = '女'
                        })
                    }
                })
            },
            //修改
            edit(row) {
                // console.log(row)
                this.form = {...row}
                this.dialogFormVisible = true
                this.state = false
            },
            //删除
            del(row) {
                // console.log(row)
                this.$alert('确定删除吗？','提示',{
                    confirmButtonText:'确定',
                    cancelButtonText: '取消',
                    callback:() => {
                        infoDel(row.id).then(res => {
                            if(res.data.status === 200 ){
                                    this.$message({message: res.data.message, type:'success'})
                                    this.getData()
                                }
                        })
                    }
                })
            },
            //添加学生信息
            addStudent(){
                this.state = true
                this.dialogFormVisible = true
                this.form = {
                    name:"",
                    age:"",
                    sex:"1",
                    father:"",
                    mather:"",
                    time:"",
                    address:"",
                    phone:"",
                }
            },
            //确定
            sure(form){
                // console.log(form, this.form)
                this.$refs[form].validate(valid => {
                    if(valid){
                        // console.log(form, this.form)
                        if(this.state){
                            info('post', this.form).then(res => {
                                // console.log(res)
                                if(res.data.status === 200 ){
                                    this.dialogFormVisible = false
                                    this.$message({message: res.data.message, type:'success'})
                                    this.getData()
                                    this.$refs[form].resetFields()
                                }
                            })
                        }else{
                            info('put', this.form).then(res => {
                                // console.log(res)
                                if(res.data.status === 200 ){
                                    this.dialogFormVisible = false
                                    this.$message({message: res.data.message, type:'success'})
                                    this.getData()
                                    this.$refs[form].resetFields()
                                }
                            })
                        }
                    }
                })
            },
            //取消
            closeInfo(form){
                // console.log(form)
                this.dialogFormVisible = false
                this.$refs[form].resetFields()
            },
        },
    };
</script>

<style lang="less">
    .infoList{
        .el-pagination{
            text-align: left;
            margin-top: 20px;
        }
        .demo-form-inline .el-form-item{
             text-align: left;
        }
    }
</style>