<template>
  <div>
    <el-form label-position="left"
             label-width="105px">
      <el-row :gutter="10">
        <el-col :span="12">
          <el-form-item>
            <template slot="label">
              <span>{{$t('setting.auto.encryptLabel')}}</span>
              <el-tooltip placement="top">
                <div slot="content">
                  <p>{{$t('setting.auto.encryptTip')}}</p>
                </div>
                <i class="el-icon-question" />
              </el-tooltip>
            </template>
            <el-switch v-model="autoEncrypt"
                       size="mini" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item>
            <template slot="label">
              <span>{{$t('setting.auto.decryptLabel')}}</span>
              <el-tooltip placement="top">
                <div slot="content">
                  <p>{{$t('setting.auto.decryptTip')}}</p>
                </div>
                <i class="el-icon-question" />
              </el-tooltip>
            </template>
            <el-switch v-model="autoDecrypt"
                       size="mini" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item :label="$t('setting.password.title')">
        <el-input v-model="password">
          <el-tooltip slot="append"
                      :content="$t('button.copy')">
            <el-button icon="el-icon-copy-document"
                       class="copy-append"
                       @click="copyPsw()" />
          </el-tooltip>
        </el-input>
      </el-form-item>
      <el-form-item :label="$t('setting.cipherType.label')">
        <el-select v-model="cipherVersion">
          <el-option v-for="i in maxVersion"
                     :value="i"
                     :key="i"
                     :label="i+'. '+$t(`setting.cipherType.remark.${i}`)" />
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import copy from '../../util/copy-util'
import cryptorConfig from '../../../zero/cryptor-config'
import cryptor from '../../../zero/cryptor'
export default {
  name: 'ZeroSetting',
  data () {
    return {
      password: '',
      autoEncrypt: false,
      autoDecrypt: false,
      maxVersion: cryptor.version(),
      cipherVersion: 1
    }
  },
  created () {
    cryptorConfig.getPassword(password => this.password = password)
    cryptorConfig.getAutoFill(isOn => this.autoEncrypt = !!isOn)
    cryptorConfig.getAutoDecrypt(isOn => this.autoDecrypt = !!isOn)
    cryptorConfig.getCipherVersion(version => this.cipherVersion = version)
  },
  watch: {
    password (nv) {
      cryptorConfig.changePassword(nv)
    },
    autoEncrypt (nv) {
      cryptorConfig.changeAutoFill(nv)
    },
    autoDecrypt (nv) {
      cryptorConfig.changeAutoDecrypt(nv)
    },
    cipherVersion (nv) {
      cryptorConfig.changeCipherVersion(nv)
    }
  },
  methods: {
    copyPsw () {
      copy(this.password, this)
    }
  }
}
</script>

<style scoped>
.copy-append {
  padding: 12px 12px !important;
}
</style>
