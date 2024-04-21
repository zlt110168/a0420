<template>
    <div>
        <van-button type="primary">主要按钮</van-button>
        <van-button type="success">成功按钮</van-button>
        <van-button type="default">默认按钮</van-button>
        <van-button type="danger">危险按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-cell title="选择日期区间" :value="date" @click="show = true" />
        <van-calendar v-model:show="show" type="range" @confirm="onConfirm" />
        <van-field v-model="fieldValue" is-link readonly label="地区" placeholder="请选择所在地区" @click="show1 = true" />
        <van-popup v-model:show="show1" round position="bottom">
            <van-cascader v-model="cascaderValue" title="请选择所在地区" :options="options" @close="show1 = false"
                @finish="onFinish" />
        </van-popup>


    </div>
</template>

<script setup>
import { ref } from 'vue';
import Rtwo from './Rtwo';

const date = ref('');
const show = ref(false);

const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`;
const onConfirm = (values) => {
    const [start, end] = values;
    show.value = false;
    date.value = `${formatDate(start)} - ${formatDate(end)}`;
};

const show1 = ref(false);
const fieldValue = ref('');
const cascaderValue = ref('');
// 选项列表，children 代表子选项，支持多级嵌套
const options = [
    {
        text: '浙江省',
        value: '330000',
        children: [{ text: '杭州市', value: '330100' }],
    },
    {
        text: '江苏省',
        value: '320000',
        children: [{ text: '南京市', value: '320100' }],
    },
];
// 全部选项选择完毕后，会触发 finish 事件
const onFinish = ({ selectedOptions }) => {
    show.value = false;
    fieldValue.value = selectedOptions.map((option) => option.text).join('/');
};
</script>

<style lang="scss" scoped></style>