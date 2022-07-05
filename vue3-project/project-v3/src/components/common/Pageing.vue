<template>
    <!-- 分页组件封装 -->
    <div>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page"
            :page-sizes="[ 5 , 10 , 20, 30, 40]"
            :page-size="size"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
    </div>
</template>

<script>
    import { getTableData } from '@/utils/table.js'
    export default {
        name:'Pageing',
        props:{
            "total":Number,
            "url":String,
        },
        data(){
            return {
                page:1,  //当前页数
                size:5,    //每页显示条数
            }
        },
        created(){
            // console.log(this.$parent)   //相当于获取VC,即this.$parent就是vc
            getTableData(this.$parent, '/works', {page: this.page, size: this.size}, ["completed"])
        },
        methods:{
            //分页方法实现
            handleSizeChange(val) {
                this.size = val
                this.page = 1
                getTableData(this.$parent, '/works', {page: this.page, size: this.size}, ["completed"])
            },
            handleCurrentChange(val) {
                this.page = val
                getTableData(this.$parent, '/works', {page: val, size: this.size}, ["completed"])
            },
        },
    }
</script>