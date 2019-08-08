<template>
    <div class="help-container">
        <h1 class="help-title">帮助文档</h1>
        <div class="help-content">
            <h2>- 机器人</h2>
            <div class="help-chapter">
                <div class="help-fragment">
                    <h3>1. 消息机制</h3>
                    <div class="help-section">
                        <h3>1.1 通过@机器人出入特定命令查询或更改Jenkins信息</h3>
                        <h3>1.2 当Jenkins Job发生变化机器人将收到消息并推送展示（指定Job）</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="help-content">
            <h2>- 命令（@机器人后都有一个空格）</h2>
            <div class="help-chapter">
                <div class="help-fragment">
                    <h3>1. 查询</h3>
                    <div class="help-section">
                        <h3>1.1 帮助文档: @机器人 help</h3>
                        <h3>1.2 Jenkins所有Job: @机器人 jobs</h3>
                        <h3>1.3 最后一次构建版本号: @机器人 lB</h3>
                        <h3>1.4 本人最后一次构建版本号: @机器人 lSB</h3>
                        <h3>1.5 构建历史Top 10: @机器人 top10</h3>
                        <h3>1.6 Job状态: @机器人 info</h3>
                    </div>
                </div>
                <div class="help-fragment">
                    <h3>2. 构建</h3>
                    <div class="help-section">
                        <h3>2.1 Job构建: @机器人 b+</h3>
                        <h3>2.2 Job构建停止: @机器人 b-</h3>
                    </div>
                </div>
                <div class="help-fragment">
                    <h3>3. 参数/进入环境</h3>
                    <div class="help-section">
                        <h3>3.1 进入Job: @机器人 id或者名字（类似跳板机操作）</h3>
                        <h3>3.2 进入Job下的某一个构建版本: @机器人 构建版本号</h3>
                    </div>
                </div>
                <div class="help-fragment">
                    <h3>4. 搜索</h3>
                    <div class="help-section">
                        <h3>4.1 搜索Job: @机器人 job名称（支持模糊，将返回结果集）</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
    .help-container {
        padding: 10px 20px;
    }

    .help-content {
        margin-top: 16px;
    }

    .help-title {
        text-align: center;
    }

    .help-chapter {
        padding-left: 15px;
        padding-top: 8px;
    }

    .help-fragment {
        margin-bottom: 15px;
    }

    .help-section {
        padding-left: 15px;
        padding-top: 4px;
    }
</style>

