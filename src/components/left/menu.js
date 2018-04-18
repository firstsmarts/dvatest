
// 配置的时候请不要让路径的 path 有任何重复
export default[
    {
        path : 'index',
        icon : 'dashboard',
        text : '系统状态'
    }, {
        text : '教学管理',
        icon : 'form',
        path : 'temanage',
        children : [
            {
                text: '科目管理',
                path: 'lessons',
                children: [{
                    text: '编辑',
                    path: 'edite'
                }]
            }, {
                text: '课程管理',
                path: 'step-form'
            }, {
                text: '教学编排',
                path: 'advanced-form'
            }
        ]
    }, {
        text : '考试管理',
        icon : 'table',
        path : 'list'
    }, {
        text : '用户管理',
        icon : 'profile',
        path : 'users',
        children : [
            {
                text: '基础详情页',
                path: 'basic'
            }
        ]
    }, {
        text : '虚拟机管理',
        icon : 'check-circle-o',
        path : 'result',
        children : [
            {
                text: '成功',
                path: 'success'
            }
        ]
    }, {
        text : '系统管理',
        icon : 'warning',
        path : 'exception',
        children : [
            {
                text: '403',
                path: '403',
                authority: 'user'
            }
        ]
    }
]