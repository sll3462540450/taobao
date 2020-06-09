<template>
  <div>
    <div>
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="true"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
        :auto-upload="true"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>

    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      :label-position="labelPosition"
    >
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model="ruleForm.age"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-input v-model="ruleForm.gender"></el-input>
      </el-form-item>
      <el-form-item label="家庭住址" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <el-option label="沈阳" value="shanghai"></el-option>
          <el-option label="鞍山" value="beijing"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 头像上传
      imageUrl: "http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20181226/97d5877e0ac1445980e755225514efc5.jpeg",
      dialogVisible: false,
      labelPosition: "left", //表单文本居左

      ruleForm: {
        name: "",
        region: "",
        type: [],
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        age: [
          { required: true, message: "请输入年龄", trigger: "blur" },
          { min: 0, max: 5, trigger: "blur" }
        ],
        gender: [
          { required: true, message: "请输入性别", trigger: "blur" },
          { min: 0, max: 5, trigger: "blur" }
        ],
        region: [
          { required: true, message: "请输入家庭住址", trigger: "change" }
        ],

        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  methods: {
    //头像上传
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },


    open1() {
      const h = this.$createElement;
      this.$notify({
        // title: "标题名称",
        message: h("i", { style: "color: teal" }, "信息提交成功")
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style>
</style>