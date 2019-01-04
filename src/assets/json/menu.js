//路由分类
export default [{
    icon: "el-icon-xgw-home",
    index: "home",
    title: "系统首页"
  },
  {
    icon: "el-icon-xgw-biaogeshezhi",
    index: "table",
    title: "表格组件",
    subs: [{
      index: "pageTable",
      title: "分页记忆表格"
    },
    {
      index: "treeTable",
      title: "树形表格",
    }
  ]
  },
  {
    icon: "el-icon-xgw-graphical",
    index: "chart",
    title: "图形相关",
    subs: [{
        index: "gannt",
        title: "甘特图"
      },
      {
        index: "progress",
        title: "计划进度图",
      },
      {
        index: "flow",
        title: "工业流程图",
      }
    ]
  }
]
