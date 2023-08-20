<template>
  <div class="about">
    <h1>This is an about page</h1>
    <img src="~@/assets/logo.png" alt="">
    11111
    <Icon type="ios-checkmark" class="icons" />
    1111
    <Collapse v-model="value">
        <Panel name="1">
            史蒂夫·乔布斯
            <template #content>史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</template>
        </Panel>
        <Panel name="2">
            斯蒂夫·盖瑞·沃兹尼亚克
            <template #content>斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</template>
        </Panel>
        <Panel name="3">
            乔纳森·伊夫
            <template #content>乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</template>
        </Panel>
    </Collapse>

    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3640.40605792089!2d120.6652766!3d24.1574881!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d784543c9f9%3A0x1e1856ead20202aa!2z5ZyL56uL6Ieq54S256eR5a245Y2a54mp6aSo56ys5LiJ5YGc6LuK5aC077yI6KW_5bGv6Lev77yJ!5e0!3m2!1szh-TW!2stw!4v1688802124512!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                value: '1'
            }
        }
    }
</script>
