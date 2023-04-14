const NodeStatus = [
	{
		value: '0',
		label: '无效'
	},
	{
		value: '1',
		label: '有效'
	}
]

const TempleType = [
	{
		value: '1',
		label: '交易权限'
	},
	{
		value: '2',
		label: '佣金费率'
	},
	{
		value: '3',
		label: '佣金限制'
	}
]

const RecordStatus = [
	{
		value: '0',
		label: '无效'
	},
	{
		value: '1',
		label: '有效'
	}
]

const TransactionType = [
	{
		value: '1',
		label: '用户数据'
	},
	{
		value: '2',
		label: '节点配置信息'
	},
	{
		value: '3',
		label: '市场产品信息'
	},
	{
		value: '4',
		label: '费率数据'
	}
]

const DataStatus = [
	{
		value: '2',
		label: '日初数据已经上场'
	},
	{
		value: '5',
		label: '日终数据已经下场'
	}
]

const BrokerageType = [
	{
		value: '0',
		label: '毛佣金'
	},
	{
		value: '1',
		label: '净佣金'
	}
]

const ExchangeID = [
	{
		value: '0',
		label: '通用(内部使用)'
	},
	{
		value: '1',
		label: '上海交易所'
	},
	{
		value: '2',
		label: '深圳交易所'
	},
	{
		value: '3',
		label: '香港交易所'
	},
	{
		value: '4',
		label: '北京证券交易所'
	}
]

const DataSyncStatus = [
	{
		value: '1',
		label: '未同步'
	},
	{
		value: '2',
		label: '同步中'
	},
	{
		value: '3',
		label: '已同步'
	},
	{
		value: '4',
		label: '全部同步完成'
	}
]

const MdbExecutedStatus = [
	{
		value: '0',
		label: '未上场'
	},
	{
		value: '1',
		label: '已反馈'
	},
	{
		value: '2',
		label: '已处理'
	}
]

const ConnectStatus = [
	{
		value: '1',
		label: '没有任何连接'
	},
	{
		value: '2',
		label: '正在分配应用组件'
	},
	{
		value: '3',
		label: '已经连接'
	}
]

const MarketID = [
	{
		value: '0',
		label: '通用(内部使用)'
	},
	{
		value: '1',
		label: '上海A股'
	},
	{
		value: '2',
		label: '深圳A股'
	},
	{
		value: '3',
		label: '上海B股'
	},
	{
		value: '4',
		label: '深圳B股'
	},
	{
		value: '5',
		label: '深圳三版A股'
	},
	{
		value: '6',
		label: '深圳三版B股'
	},
	{
		value: '7',
		label: '境外市场'
	},
	{
		value: '8',
		label: '深圳港股通市场'
	},
	{
		value: '9',
		label: '上海港股通市场'
	},
	{
		value: 'a',
		label: '北京主板'
	}
]

const ProductID = [
	{
		value: '0',
		label: '通用(内部使用)'
	},
	{
		value: '1',
		label: '上海股票'
	},
	{
		value: '3',
		label: '上海基金'
	},
	{
		value: '4',
		label: '上海债券'
	},
	{
		value: '5',
		label: '上海标准券'
	},
	{
		value: '6',
		label: '上海质押式回购'
	},
	{
		value: '7',
		label: '深圳股票'
	},
	{
		value: '9',
		label: '深圳基金'
	},
	{
		value: 'a',
		label: '深圳债券'
	},
	{
		value: 'b',
		label: '深圳标准券'
	},
	{
		value: 'c',
		label: '深圳质押式回购'
	},
	{
		value: 'd',
		label: '深港通港股主板'
	},
	{
		value: 'e',
		label: '深港通港股创业板'
	},
	{
		value: 'f',
		label: '深港通港股扩充交易证券'
	},
	{
		value: 'g',
		label: '深港通港股NasdaqAMX市场'
	},
	{
		value: 'i',
		label: '上海科创板'
	},
	{
		value: 'j',
		label: '北京股票'
	}
]

const PlatformType = [
	{
		value: '0',
		label: '现货集中竞价交易平台'
	},
	{
		value: '1',
		label: '衍生品集中竞价交易平台'
	},
	{
		value: '2',
		label: '非交易处理平台'
	},
	{
		value: '3',
		label: '综合协议交易平台'
	},
	{
		value: '4',
		label: '混合多平台'
	},
	{
		value: '5',
		label: '国际市场互联平台'
	},
	{
		value: '6',
		label: '中国结算总部FDEP平台'
	},
	{
		value: '7',
		label: '上交所新债系统'
	},
	{
		value: '8',
		label: '固定收益平台'
	},
	{
		value: '9',
		label: '新竞价交易平台（上交所）'
	},
	{
		value: 'a',
		label: '深证登记结算平台'
	}
]

const CurrencyID = [
	{
		value: '1',
		label: '人民币'
	},
	{
		value: '2',
		label: '港币'
	},
	{
		value: '3',
		label: '美元'
	}
]

const OrderUnit = [
	{
		value: '0',
		label: '手'
	},
	{
		value: '1',
		label: '股'
	},
	{
		value: '2',
		label: '份'
	},
	{
		value: '3',
		label: '张'
	}
]

const QualificationClass = [
	{
		value: '0',
		label: '所有投资者'
	},
	{
		value: '1',
		label: '合格投资者'
	},
	{
		value: '2',
		label: '合格投资者中机构投资者'
	}
]

const QualificationType = [
	{
		value: '0',
		label: '合格投资者中机构投资者'
	},
	{
		value: '1',
		label: '合格投资者中个人投资者'
	},
	{
		value: '2',
		label: '社会公众投资者'
	},
	{
		value: '3',
		label: '普通投资者企业债公司债'
	}
]

const ProfInvestorType = [
	{
		value: '0',
		label: '非专业投资者'
	},
	{
		value: '1',
		label: '专业投资者'
	}
]

const IdCardType = [
	{
		value: '0',
		label: '组织机构代码'
	},
	{
		value: '1',
		label: '中国公民身份证'
	},
	{
		value: '2',
		label: '军官证'
	},
	{
		value: '3',
		label: '警官证'
	},
	{
		value: '4',
		label: '士兵证'
	},
	{
		value: '5',
		label: '户口簿'
	},
	{
		value: '6',
		label: '护照'
	},
	{
		value: '7',
		label: '台胞证'
	},
	{
		value: '8',
		label: '回乡证'
	},
	{
		value: '9',
		label: '营业执照号'
	},
	{
		value: 'A',
		label: '税务登记号/当地纳税ID'
	},
	{
		value: 'B',
		label: '港澳居民来往内地通行证'
	},
	{
		value: 'C',
		label: '台湾居民来往大陆通行证'
	},
	{
		value: 'D',
		label: '驾照'
	},
	{
		value: 'F',
		label: '当地社保ID'
	},
	{
		value: 'G',
		label: '当地身份证'
	},
	{
		value: 'H',
		label: '商业登记证'
	},
	{
		value: 'I',
		label: '港澳永久性居民身份证'
	},
	{
		value: 'J',
		label: '人行开户许可证'
	},
	{
		value: 'x',
		label: '其他证件'
	}
]

const TradingStatus = [
	{
		value: '1',
		label: '正常'
	},
	{
		value: '2',
		label: '正在强平'
	},
	{
		value: '3',
		label: '异常'
	}
]

const ShareholderIDType = [
	{
		value: '1',
		label: '投机'
	},
	{
		value: '2',
		label: '套利'
	},
	{
		value: '3',
		label: '套保'
	},
	{
		value: 'a',
		label: '普通'
	},
	{
		value: 'b',
		label: '信用'
	},
	{
		value: 'c',
		label: '衍生品'
	}
]

const AccountType = [
	{
		value: '1',
		label: '普通'
	},
	{
		value: '2',
		label: '信用'
	},
	{
		value: '3',
		label: '衍生品'
	}
]

const BankID = [
	{
		value: '1',
		label: '中国建设银行'
	},
	{
		value: '2',
		label: '中国农业银行'
	},
	{
		value: '3',
		label: '中国工商银行'
	},
	{
		value: '4',
		label: '中国银行'
	},
	{
		value: '5',
		label: '中国招商银行'
	},
	{
		value: '6',
		label: '中国交通银行'
	},
	{
		value: '7',
		label: '浦东发展银行'
	},
	{
		value: '8',
		label: '兴业银行'
	},
	{
		value: '9',
		label: '中国光大银行'
	},
	{
		value: 'a',
		label: '广东发展银行'
	},
	{
		value: 'b',
		label: '南京银行'
	},
	{
		value: 'c',
		label: '上海银行'
	},
	{
		value: 'd',
		label: '中信银行'
	},
	{
		value: 'e',
		label: '华夏银行'
	},
	{
		value: 'f',
		label: '民生银行'
	},
	{
		value: 'g',
		label: '平安银行'
	},
	{
		value: 'h',
		label: '宁波银行'
	},
	{
		value: 'i',
		label: '北京银行'
	},
	{
		value: 'j',
		label: '邮储银行'
	}
]

const TransferDirection = [
	{
		value: '0',
		label: '蓝补'
	},
	{
		value: '1',
		label: '红冲'
	},
	{
		value: '2',
		label: '集中交易调入'
	},
	{
		value: '3',
		label: '集中交易调出'
	},
	{
		value: '4',
		label: '冻结'
	},
	{
		value: '5',
		label: '解冻'
	},
	{
		value: '6',
		label: '证券转银行'
	},
	{
		value: '7',
		label: '银行转证券'
	},
	{
		value: 'c',
		label: '外部节点转入'
	},
	{
		value: 'd',
		label: '外部节点转出'
	},
	{
		value: 'f',
		label: '直接还款'
	},
	{
		value: 'g',
		label: '直接还息(内部使用)'
	}
]

const TransferStatus = [
	{
		value: '0',
		label: '转移正在处理'
	},
	{
		value: '1',
		label: '转移成功'
	},
	{
		value: '2',
		label: '转移失败'
	},
	{
		value: '3',
		label: '冲正正在处理'
	},
	{
		value: '4',
		label: '冲正成功'
	},
	{
		value: '5',
		label: '冲正失败'
	},
	{
		value: '6',
		label: '外部系统已接收'
	},
	{
		value: '#',
		label: '发往交易核心'
	}
]

const OperateSource = [
	{
		value: '0',
		label: '实时上场'
	},
	{
		value: '1',
		label: 'API调用'
	},
	{
		value: '2',
		label: '自动触发'
	},
	{
		value: '3',
		label: 'API紧急上场'
	}
]

const UserType = [
	{
		value: '0',
		label: '经纪公司用户'
	},
	{
		value: '1',
		label: '超级用户'
	},
	{
		value: '2',
		label: '投资者用户'
	}
]

const LoginStatus = [
	{
		value: '1',
		label: '启用'
	},
	{
		value: '2',
		label: '禁用'
	},
	{
		value: '4',
		label: '锁定'
	}
]

const RangeMode = [
	{
		value: '0',
		label: '普通范围模式'
	},
	{
		value: '1',
		label: '模板范围模式'
	},
	{
		value: '2',
		label: '折扣模式'
	},
	{
		value: '3',
		label: '非默认非通用'
	},
	{
		value: '4',
		label: '非默认通用'
	},
	{
		value: '5',
		label: '默认非通用'
	},
	{
		value: '6',
		label: '默认通用'
	}
]

const Direction = [
	{
		value: '0',
		label: '买入'
	},
	{
		value: '1',
		label: '卖出'
	},
	{
		value: '2',
		label: 'ETF申购'
	},
	{
		value: '3',
		label: 'ETF赎回'
	},
	{
		value: '4',
		label: '新股申购'
	},
	{
		value: '5',
		label: '正回购'
	},
	{
		value: '6',
		label: '逆回购'
	},
	{
		value: '8',
		label: '开放式基金申购'
	},
	{
		value: '9',
		label: '开放式基金赎回'
	},
	{
		value: 'a',
		label: '担保品划入'
	},
	{
		value: 'b',
		label: '担保品划出'
	},
	{
		value: 'd',
		label: '质押入库'
	},
	{
		value: 'e',
		label: '质押出库'
	},
	{
		value: 'f',
		label: '配股配债'
	},
	{
		value: 'g',
		label: '基金拆分'
	},
	{
		value: 'h',
		label: '基金合并'
	},
	{
		value: 'i',
		label: '融资买入'
	},
	{
		value: 'j',
		label: '融券卖出'
	},
	{
		value: 'k',
		label: '卖券还款'
	},
	{
		value: 'l',
		label: '买券还券'
	},
	{
		value: 'm',
		label: '还券划转'
	},
	{
		value: 'n',
		label: '余券划转'
	},
	{
		value: 'o',
		label: '源券划转'
	},
	{
		value: 't',
		label: '债券转股'
	},
	{
		value: 'u',
		label: '债券回售'
	},
	{
		value: 'v',
		label: 'ETF实物申购'
	},
	{
		value: 'w',
		label: 'ETF实物赎回'
	},
	{
		value: 'x',
		label: '回售撤销'
	},
	{
		value: 'A',
		label: '意向买入'
	},
	{
		value: 'B',
		label: '意向卖出'
	},
	{
		value: 'C',
		label: '成交确认买入'
	},
	{
		value: 'D',
		label: '成交确认卖出'
	}
]

const PosLimitType = [
	{
		value: '0',
		label: '风险警示板'
	},
	{
		value: '1',
		label: '1'
	}
]

const SpecPrivilegeType = [
	{
		value: '0',
		label: '创业板'
	},
	{
		value: '1',
		label: '风险警示板'
	},
	{
		value: '2',
		label: '退市整理板'
	},
	{
		value: '3',
		label: '港股通'
	},
	{
		value: '4',
		label: '科创板'
	},
	{
		value: '5',
		label: '创业板注册制'
	},
	{
		value: '6',
		label: '分级基金'
	},
	{
		value: '7',
		label: '可转债'
	},
	{
		value: '8',
		label: '基础设施基金'
	},
	{
		value: '9',
		label: '定向可转债'
	},
	{
		value: 'a',
		label: '北交所股票'
	},
	{
		value: 'b',
		label: '主板交易'
	}
]

const TransferPositionType = [
	{
		value: '0',
		label: '任意仓'
	},
	{
		value: '1',
		label: '昨仓'
	},
	{
		value: '2',
		label: '今买卖仓'
	},
	{
		value: '3',
		label: '今申赎仓'
	},
	{
		value: '4',
		label: '今拆分合并仓'
	}
]

const MDSecurityStat = [
	{
		value: '0',
		label: '开盘前'
	},
	{
		value: '1',
		label: '集合竞价'
	},
	{
		value: '2',
		label: '连续交易'
	},
	{
		value: '3',
		label: '休市'
	},
	{
		value: '4',
		label: '停牌'
	},
	{
		value: '5',
		label: '长期停牌'
	},
	{
		value: '6',
		label: '波动性中断'
	},
	{
		value: '7',
		label: '熔断可恢复'
	},
	{
		value: '8',
		label: '熔断不可恢复'
	},
	{
		value: '9',
		label: '闭市'
	},
	{
		value: 'a',
		label: '其它'
	},
	{
		value: 'b',
		label: '收盘集合竞价'
	},
	{
		value: 'c',
		label: '集中撮合(盘后定价)'
	},
	{
		value: 'd',
		label: '连续交易(盘后定价)'
	},
	{
		value: 'e',
		label: '闭市(盘后定价)'
	},
	{
		value: 'f',
		label: '开盘前(盘后定价)'
	}
]

const PositionTradingFlag = [
	{
		value: '0',
		label: '不可以'
	},
	{
		value: '1',
		label: '可以'
	},
	{
		value: 'X',
		label: '不适用'
	}
]

const CreRedType = [
	{
		value: '0',
		label: '普通申赎'
	},
	{
		value: '1',
		label: '实物申赎'
	}
]

const ETFCurrenceReplaceStatus = [
	{
		value: '0',
		label: '禁止现金替代'
	},
	{
		value: '1',
		label: '可以现金替代'
	},
	{
		value: '2',
		label: '必须现金替代'
	},
	{
		value: '3',
		label: '跨市退补现金替代'
	},
	{
		value: '4',
		label: '跨市必须现金替代'
	}
]

const IssueMode = [
	{
		value: '0',
		label: '市值配售方式'
	},
	{
		value: '1',
		label: '增发定价方式'
	},
	{
		value: '2',
		label: '信用申购方式'
	}
]

const BizClass = [
	{
		value: '0',
		label: '买入'
	},
	{
		value: '1',
		label: '卖出'
	},
	{
		value: '2',
		label: 'ETF申购'
	},
	{
		value: '3',
		label: 'ETF赎回'
	},
	{
		value: '4',
		label: '新股申购'
	},
	{
		value: '5',
		label: '正回购'
	},
	{
		value: '6',
		label: '逆回购'
	},
	{
		value: '8',
		label: '开放式基金申购'
	},
	{
		value: '9',
		label: '开放式基金赎回'
	},
	{
		value: 'a',
		label: '担保品划入'
	},
	{
		value: 'b',
		label: '担保品划出'
	},
	{
		value: 'd',
		label: '质押入库'
	},
	{
		value: 'e',
		label: '质押出库'
	},
	{
		value: 'f',
		label: '配股配债'
	},
	{
		value: 'g',
		label: '开放式基金拆分'
	},
	{
		value: 'h',
		label: '开放式基金合并'
	},
	{
		value: 'i',
		label: '融资买入'
	},
	{
		value: 'j',
		label: '融券卖出'
	},
	{
		value: 'k',
		label: '卖券还款'
	},
	{
		value: 'l',
		label: '买券还券'
	},
	{
		value: 'm',
		label: '还券划转'
	},
	{
		value: 'n',
		label: '余券划转'
	},
	{
		value: 'o',
		label: '源券划转'
	},
	{
		value: 'p',
		label: '卖券强平还款(内部使用)'
	},
	{
		value: 'q',
		label: '买券强平还券(内部使用)'
	},
	{
		value: 'r',
		label: '负债展期(内部使用)'
	},
	{
		value: 's',
		label: '转托管'
	},
	{
		value: 't',
		label: '债券转股'
	},
	{
		value: 'u',
		label: '债券回售'
	},
	{
		value: 'v',
		label: 'ETF实物申购'
	},
	{
		value: 'w',
		label: 'ETF实物赎回'
	},
	{
		value: 'x',
		label: '回售撤销'
	}
]

const OrderPriceType = [
	{
		value: '1',
		label: '任意价'
	},
	{
		value: '2',
		label: '限价'
	},
	{
		value: '3',
		label: '最优价'
	},
	{
		value: '4',
		label: '盘后定价'
	},
	{
		value: '5',
		label: '五档价'
	},
	{
		value: '6',
		label: '本方最优'
	}
]

const TimeCondition = [
	{
		value: '1',
		label: '立即完成，否则撤销'
	},
	{
		value: '2',
		label: '本节有效'
	},
	{
		value: '3',
		label: '当日有效'
	},
	{
		value: '4',
		label: '指定日期前有效'
	},
	{
		value: '5',
		label: '撤销前有效'
	},
	{
		value: '6',
		label: '集合竞价有效'
	}
]

const VolumeCondition = [
	{
		value: '1',
		label: '任何数量'
	},
	{
		value: '2',
		label: '最小数量'
	},
	{
		value: '3',
		label: '全部数量'
	}
]

const LotType = [
	{
		value: '0',
		label: '零股订单'
	},
	{
		value: '1',
		label: '整手订单'
	}
]

const Operway = [
	{
		value: ' ',
		label: '空'
	},
	{
		value: '0',
		label: '电话委托'
	},
	{
		value: '1',
		label: '柜台委托'
	},
	{
		value: '2',
		label: '移动客户端委托'
	},
	{
		value: '3',
		label: 'PC客户端委托'
	},
	{
		value: '4',
		label: 'TY委托'
	}
]

const CondCheck = [
	{
		value: '0',
		label: '不做任何检查'
	},
	{
		value: '1',
		label: '自成交检查'
	}
]

const OrderStatus = [
	{
		value: '0',
		label: '预埋'
	},
	{
		value: '1',
		label: '未知'
	},
	{
		value: '2',
		label: '交易所已接收'
	},
	{
		value: '3',
		label: '部分成交'
	},
	{
		value: '4',
		label: '全部成交'
	},
	{
		value: '5',
		label: '部成部撤'
	},
	{
		value: '6',
		label: '全部撤单'
	},
	{
		value: '7',
		label: '交易所已拒绝'
	},
	{
		value: '#',
		label: '发往交易核心'
	}
]

const OrderSubmitStatus = [
	{
		value: '0',
		label: '未提交'
	},
	{
		value: '1',
		label: '已提交'
	},
	{
		value: '2',
		label: '撤单未提交'
	},
	{
		value: '3',
		label: '撤单已提交'
	},
	{
		value: '4',
		label: '撤单已被拒绝'
	},
	{
		value: '5',
		label: '撤单已删除'
	}
]

const OrderType = [
	{
		value: '0',
		label: '正常'
	},
	{
		value: '1',
		label: '报价衍生'
	},
	{
		value: '2',
		label: '组合衍生'
	},
	{
		value: '3',
		label: '组合报单'
	},
	{
		value: '4',
		label: '条件单'
	},
	{
		value: '5',
		label: '互换单'
	},
	{
		value: '6',
		label: '预埋单'
	},
	{
		value: '7',
		label: '夜市委托'
	},
	{
		value: '8',
		label: '通道委托'
	}
]

const ActionFlag = [
	{
		value: '0',
		label: '删除'
	},
	{
		value: '3',
		label: '修改'
	},
	{
		value: '4',
		label: '强制删除'
	}
]

const CancelOrderStatus = [
	{
		value: '0',
		label: '预埋'
	},
	{
		value: '1',
		label: '已提交'
	},
	{
		value: '2',
		label: '成功'
	},
	{
		value: '3',
		label: '拒绝'
	}
]

const CancelOrderType = [
	{
		value: '0',
		label: '普通撤单'
	},
	{
		value: '1',
		label: '强制撤单'
	},
	{
		value: '2',
		label: '预埋撤单'
	},
	{
		value: '3',
		label: '通道撤单'
	}
]

const PriceTickID = [
	{
		value: '0',
		label: '股本证券'
	},
	{
		value: '1',
		label: '债务证券'
	},
	{
		value: '2',
		label: '股票期权'
	}
]

const PriceTickType = [
	{
		value: '0',
		label: '价格上下限'
	},
	{
		value: '1',
		label: '价差组'
	}
]

const ParamType = [
	{
		value: '0',
		label: '最大买量限制'
	},
	{
		value: '1',
		label: '最大卖量限制'
	},
	{
		value: '2',
		label: '买入大额申报限制比例'
	},
	{
		value: '3',
		label: '卖出大额申报限制比例'
	},
	{
		value: '4',
		label: '风险警示买入上限'
	},
	{
		value: '5',
		label: '连续申报时间间隔'
	},
	{
		value: '6',
		label: '连续申报单位时间委托笔数'
	},
	{
		value: '7',
		label: '影响收盘价波动比例'
	},
	{
		value: '8',
		label: '炒新控制最大上市时间'
	},
	{
		value: '9',
		label: '涨跌停板虚假申报占未成交比例'
	},
	{
		value: 'a',
		label: '撤单限制比例'
	}
]

const FundType = [
	{
		value: '0',
		label: '标准LOF'
	},
	{
		value: '1',
		label: '分级母基金'
	},
	{
		value: '2',
		label: '分级子基金'
	}
]

const TBStatus = [
	{
		value: '1',
		label: '读取T日市场数据开始'
	},
	{
		value: '2',
		label: '读取T日市场数据完成'
	},
	{
		value: '3',
		label: '读取T日终投资者数据开始'
	},
	{
		value: '4',
		label: '读取T日终投资者数据完成'
	},
	{
		value: '5',
		label: '分配投资者开始'
	},
	{
		value: '6',
		label: '分配投资者完成'
	},
	{
		value: '7',
		label: '准备奇点上场数据开始'
	},
	{
		value: '8',
		label: '准备奇点上场数据完成'
	},
	{
		value: '9',
		label: '奇点上场数据推送开始'
	},
	{
		value: 'A',
		label: '奇点上场数据推送完成'
	},
	{
		value: 'B',
		label: '奇点上场开始'
	},
	{
		value: 'C',
		label: '奇点上场完成'
	},
	{
		value: 'D',
		label: '上场数据归档开始'
	},
	{
		value: 'E',
		label: '上场数据归档完成'
	},
	{
		value: 'H',
		label: '上场数据与qd库数据对比检查开始'
	},
	{
		value: 'I',
		label: '上场数据与qd库数据对比检查结束'
	},
	{
		value: 'X',
		label: '计算下一交易日行情开始'
	},
	{
		value: 'Y',
		label: '计算下一交易日行情完成'
	}
]

const VIP = [
	{
		label: '空',
		value: '0'
	},
	{
		label: '向外部系统划拨担保券',
		value: '13'
	},
	{
		label: '银证转账',
		value: '15'
	},
	{
		label: '条件报单插入',
		value: '19'
	},
	{
		label: '条件报单操作',
		value: '1a'
	},
	{
		label: '强制删除报单',
		value: '1d'
	},
	{
		label: '风控管理',
		value: '1e'
	},
	{
		label: '回传数据',
		value: '1g'
	},
	{
		label: '协议交易报单插入',
		value: '1h'
	},
	{
		label: '协议交易报单操作',
		value: '1i'
	},
	{
		label: '强制删除协议交易报单',
		value: '1j'
	},
	{
		label: '复核资金调整',
		value: '20'
	},
	{
		label: '复核仓位调整',
		value: '21'
	},
	{
		label: '复核柜员管理',
		value: '23'
	},
	{
		label: '复核角色管理',
		value: '25'
	},
	{
		label: '复核预埋通道调整',
		value: '26'
	},
	{
		label: '复核调整资金账户',
		value: '27'
	},
	{
		label: '调整系统参数',
		value: '32'
	},
	{
		label: '内部组件运行配置',
		value: '33'
	},
	{
		label: '行情相关管理（市场状态/平台状态等）',
		value: '34'
	},
	{
		label: '终端信息管理',
		value: '36'
	},
	{
		label: '新股配号中签信息、新股额度管理',
		value: '37'
	},
	{
		label: '席位管理',
		value: '39'
	},
	{
		label: '机构信息管理',
		value: '3a'
	},
	{
		label: '柜员管理（增、删、改、分配操作权限、分配访问权限、禁用、启用、解锁、登出、重置密码、设置 IP 限制）',
		value: '3b'
	},
	{
		label: '修改柜员密码',
		value: '3g'
	},
	{
		label: '柜员功能权限管理',
		value: '3h'
	},
	{
		label: '预埋通道调整',
		value: '3B'
	},
	{
		label: '节点信息管理',
		value: '3C'
	},
	{
		label: '动态密码管理',
		value: '3D'
	},
	{
		label: '资金账户管理',
		value: '3E'
	},
	{
		label: '查询席位相关：PBU、TradeOffer、MDServer奇点现货系统数据上场接口规范',
		value: '50'
	},
	{
		label: '查询市场',
		value: '51'
	},
	{
		label: '查询证券信息',
		value: '52'
	},
	{
		label: '查询机构信息',
		value: '53'
	},
	{
		label: '查询柜员信息、角色赋权、功能权限、数据权限',
		value: '54'
	},
	{
		label: '查询角色',
		value: '55'
	},
	{
		label: '查询投资者信息:股东账户、Investor、User、关联账户',
		value: '56'
	},
	{
		label: '查询委托/撤单',
		value: '58'
	},
	{
		label: '查询成交',
		value: '59'
	},
	{
		label: '查询资金',
		value: '5a'
	},
	{
		label: '查询质押/证券、标准券持仓',
		value: '5b'
	},
	{
		label: '查询投资者交易参数:费率、条件单参数、交易权限、系统权限、特殊交易权限',
		value: '5c'
	},
	{
		label: '查询新股相关信息：额度、配号、中签结果',
		value: '5d'
	},
	{
		label: '查询报单明细资金',
		value: '5e'
	},
	{
		label: '查询资金转移明细资金',
		value: '5f'
	},
	{
		label: '查询持仓转移流水',
		value: '5g'
	},
	{
		label: '查询经纪公司交易参数:费率模板、权限模板、持仓交易属性、基础交易费率、报单前缀、交易所回报序号',
		value: '5h'
	},
	{
		label: '查询交易通知',
		value: '5i'
	},
	{
		label: '查询用户事件',
		value: '5j'
	},
	{
		label: '查询系统参数',
		value: '5n'
	},
	{
		label: '查询应用程序相关',
		value: '5o'
	},
	{
		label: '查询资金调整',
		value: '5p'
	},
	{
		label: '查询仓位调整',
		value: '5q'
	},
	{
		label: '查询预埋通道调整',
		value: '5r'
	},
	{
		label: '查询柜员调整',
		value: '5s'
	},
	{
		label: '查询客户信息调整',
		value: '5t'
	},
	{
		label: '查询角色调整',
		value: '5u'
	},
	{
		label: '查询节点信息',
		value: '5v'
	},
	{
		label: '查询动态密码信息',
		value: '5w'
	},
	{
		label: '查询资金账户调整',
		value: '5x'
	},
	{
		label: '紧急上场',
		value: '60'
	},
	{
		label: 'Dump 席位相关：PBU、TradeOffer、MDServer',
		value: '70'
	},
	{
		label: 'Dump 市场',
		value: '71'
	},
	{
		label: 'Dump 证券信息',
		value: '72'
	},
	{
		label: 'Dump 机构信息',
		value: '73'
	},
	{
		label: 'Dump 柜员信息、角色赋权、功能权限、数据权限',
		value: '74'
	},
	{
		label: 'Dump 角色',
		value: '75'
	},
	{
		label: 'Dump 投资者信息:股东账户、Investor、User、关联账户',
		value: '76'
	},
	{
		label: 'Dump 委托/撤单奇点现货系统数据上场接口规范',
		value: '78'
	},
	{
		label: 'Dump 成交',
		value: '79'
	},
	{
		label: 'Dump 资金',
		value: '7a'
	},
	{
		label: 'Dump 质押/证券、标准券持仓',
		value: '7b'
	},
	{
		label: 'Dump 投资者交易参数:费率、条件单参数、交易权限、系统权限、特殊交易权限',
		value: '7c'
	},
	{
		label: 'Dump 新股相关信息：额度、配号、中签结果',
		value: '7d'
	},
	{
		label: 'Dump 报单明细资金',
		value: '7e'
	},
	{
		label: 'Dump 资金转移明细资金',
		value: '7f'
	},
	{
		label: 'Dump 持仓转移流水',
		value: '7g'
	},
	{
		label: 'Dump 经纪公司交易参数:费率模板、权限模板、持仓交易属性、基础交易费率、报单前缀、交易所回报序号',
		value: '7h'
	},
	{
		label: 'Dump 交易通知',
		value: '7i'
	},
	{
		label: 'Dump 用户事件',
		value: '7j'
	},
	{
		label: 'Dump 系统参数',
		value: '7n'
	},
	{
		label: 'Dump 应用程序相关',
		value: '7o'
	},
	{
		label: 'Dump 资金调整',
		value: '7p'
	},
	{
		label: 'Dump 仓位调整',
		value: '7q'
	},
	{
		label: 'Dump 预埋通道调整',
		value: '7r'
	},
	{
		label: 'Dump 柜员调整',
		value: '7s'
	},
	{
		label: 'Dump 客户信息调整',
		value: '7t'
	},
	{
		label: 'Dump 角色调整',
		value: '7u'
	},
	{
		label: 'Dump 节点信息',
		value: '7v'
	},
	{
		label: 'Dump 终端动态密码',
		value: '7w'
	},
	{
		label: 'Dump 资金账户调整',
		value: '7x'
	},
	{
		label: 'Dump 所有数据',
		value: '7Z'
	},
	{
		label: '授权报单插入',
		value: 'a1'
	},
	{
		label: '授权报单操作',
		value: 'a2'
	},
	{
		label: '授权资金调拨',
		value: 'a4'
	},
	{
		label: '授权持仓调拨',
		value: 'a8'
	},
	{
		label: '授权条件单插入',
		value: 'a9'
	},
	{
		label: '授权条件单操作',
		value: 'aa'
	}
]

const SVIP = [
	{
		label: '强制柜员登出',
		value: '3i'
	},
	{
		label: '强制柜员退出',
		value: '3j'
	},
	{
		label: '激活柜员用户',
		value: '3k'
	},
	{
		label: '报单插入',
		value: '11'
	},
	{
		label: '报单操作',
		value: '12'
	},
	{
		label: '资金调拨',
		value: '14'
	},
	{
		label: '冲正资金',
		value: '16'
	},
	{
		label: '冲正仓位',
		value: '17'
	},
	{
		label: '持仓调拨',
		value: '18'
	},
	{
		label: '复核客户信息管理',
		value: '24'
	},
	{
		label: '证券信息调整',
		value: '30'
	},
	{
		label: '客户信息管理：禁用、启用、解锁、重置密码、登出、设置IP 限制',
		value: '38'
	},
	{
		label: '指定交易登记撤销',
		value: '1b'
	},
	{
		label: '深证转托管撤销',
		value: '1c'
	},
	{
		label: '记录操作日志奇点现货系统数据上场接口规范',
		value: '1f'
	},
	{
		label: '角色管理（增、删、改角色）',
		value: '3c'
	},
	{
		label: '投资者交易参数管理（增、删、改费率、条件单参数、交易权限、系统权限、特殊交易权限）',
		value: '3d'
	},
	{
		label: '经纪公司交易参数管理（增、删、改费率模板、权限模板、持仓交易属性、基础交易费率、报单前缀、交易所回报序号）',
		value: '3e'
	},
	{
		label: '资金红冲蓝补',
		value: '3f'
	},
	{
		label: '仓位红冲蓝补',
		value: '3A'
	}
]

const VipCredit = [
	{ value: '00', label: '空' },
	{ value: '01', label: '报单插入' },
	{ value: '03', label: '报单操作' },
	{ value: '05', label: '强制删除报单' },
	{ value: '07', label: '条件单插入' },
	{ value: '08', label: '条件报单操作' },
	{ value: '09', label: '还券划转' },
	{ value: '0a', label: '担保品转入转出' },
	{ value: '0b', label: '余券划转' },
	{ value: '0c', label: '源券划转' },
	{ value: '0d', label: '持仓调拨' },
	{ value: '0e', label: '直接还款' },
	{ value: '0f', label: '资金调拨' },
	{ value: '0g', label: '交易通知' },
	{ value: '0h', label: '回传数据' },
	{ value: '0i', label: '导入经纪公司资格证券、证券流动资产参数' },
	{ value: '0j', label: '银证转账' },
	{ value: '0k', label: '负债展期/撤销' },
	{ value: '0l', label: '导入客户交易参数' },
	{ value: '0m', label: '批量资金调拨' },
	{ value: '20', label: '复核资金调整' },
	{ value: '21', label: '复核仓位调整' },
	{ value: '23', label: '复核柜员管理' },
	{ value: '24', label: '复核客户信息管理' },
	{ value: '25', label: '复核角色管理' },
	{ value: '26', label: '复核预埋通道调整' },
	{ value: '3f', label: '调整负债' },
	{ value: '3g', label: '预埋通道调整' },
	{ value: '40', label: '资金红冲蓝补/冻结解冻' },
	{ value: '41', label: '仓位红冲蓝补' },
	{ value: '42', label: '证券信息调整' },
	{ value: '43', label: '调整系统参数' },
	{ value: '44', label: '内部组件运行配置' },
	{ value: '45', label: '行情相关管理（市场状态/平台状态等）' },
	{ value: '46', label: '终端信息管理' },
	{ value: '47', label: '新股配号中签信息、新股额度管理' },
	{
		value: '48',
		label: '客户信息管理：禁用、启用、解锁、重置密码、登出、设置IP限制'
	},
	{ value: '49', label: '席位管理' },
	{ value: '4a', label: '机构信息管理' },
	{
		value: '4b',
		label: '柜员管理（增、删、改、分配操作权限、分配访问权限、禁用、启用、解锁、登出、重置密码、设置IP限制）'
	},
	{ value: '4c', label: '角色管理（增、删、改角色）' },
	{
		value: '4d',
		label: '投资者交易参数管理（增、删、改费率、条件单参数、交易权限、系统权限、特殊交易权限）'
	},
	{
		value: '4e',
		label: '经纪公司交易参数管理（增、删、改费率模板、权限模板、持仓交易属性、基础交易费率、报单前缀、交易所回报序号、两融套餐）'
	},
	{ value: '4f', label: '记录操作日志' },
	{ value: '4g', label: '动态密码管理' },
	{
		value: '50',
		label: '投资者风控参数管理（增、删、改风控参数、套餐类型）'
	},
	{ value: '51', label: '风控报单与撤单、直接还券、直接还款' },
	{ value: '52', label: '风险通知' },
	{ value: '53', label: '风险复核' },
	{ value: '54', label: '风控更新投资者状态' },
	{ value: '55', label: '风控更新风控参数' },
	{ value: '56', label: '风控更新投资者担保风控参数' },
	{ value: '57', label: '风控更新投资者业务规模风控参数' },
	{ value: '58', label: '风控更新经纪公司业务规模风控参数' },
	{ value: '59', label: '风控修改风险通知信息模板' },
	{ value: '5a', label: '风控修改交易数据权限' },
	{ value: '60', label: '查询席位相关：PBU、TradeOffer、MDServer' },
	{ value: '61', label: '查询市场' },
	{ value: '62', label: '查询证券信息' },
	{ value: '63', label: '查询机构信息' },
	{ value: '64', label: '查询柜员信息、角色赋权、功能权限、数据权限' },
	{ value: '65', label: '查询角色' },
	{ value: '66', label: '查询投资者信息:股东账户、Investor、User、关联账户' },
	{ value: '67', label: '查询负债' },
	{ value: '68', label: '查询偿还' },
	{ value: '69', label: '查询委托/撤单' },
	{ value: '6a', label: '查询成交' },
	{ value: '6b', label: '查询资金' },
	{ value: '6c', label: '查询质押/证券、标准券持仓' },
	{
		value: '6d',
		label: '查询投资者交易参数:费率、条件单参数、交易权限、系统权限、特殊交易权限'
	},
	{ value: '6e', label: '查询新股相关信息：额度、配号、中签结果' },
	{ value: '6f', label: '查询报单明细资金' },
	{ value: '6g', label: '查询资金转移明细资金' },
	{ value: '6h', label: '查询持仓转移流水' },
	{
		value: '6i',
		label: '查询经纪公司交易参数:费率模板、权限模板、持仓交易属性、基础交易费率、报单前缀、交易所回报序号、公司融资融券信息'
	},
	{ value: '6j', label: '查询交易通知' },
	{ value: '6k', label: '查询用户事件' },
	{ value: '6n', label: '查询系统参数' },
	{ value: '6o', label: '查询应用程序相关' },
	{ value: '6p', label: '查询资金调整' },
	{ value: '6q', label: '查询仓位调整' },
	{ value: '6s', label: '查询柜员调整' },
	{ value: '6t', label: '查询客户信息调整' },
	{ value: '6u', label: '查询角色调整' },
	{ value: '6v', label: '查询自动平仓信息' },
	{ value: '6w', label: '查询负债展期/撤销' },
	{ value: '6x', label: '查询预埋通道调整' },
	{ value: '6y', label: '查询动态密码信息' },
	{ value: '6z', label: '查询投资者套餐切换明细' },
	{ value: '70', label: '查询投资者实时融资融券信息' },
	{ value: '71', label: '查询风控通知信息模板' },
	{ value: '72', label: '查询外围系统仓位调拨流水' },
	{ value: '73', label: '查询外围系统资金调拨流水' },
	{ value: '80', label: 'Dump资金' },
	{ value: '81', label: 'Dump持仓' },
	{ value: '82', label: 'Dump股东账户' },
	{ value: '83', label: 'Dump委托' },
	{ value: '84', label: 'Dump成交' },
	{ value: '85', label: 'Dump资金变动流水' },
	{ value: '86', label: 'Dump持仓变动流水' }
]
const InvestorType = [
	{
		label: '个人',
		value: '0'
	},
	{
		label: '机构',
		value: '1'
	},
	{
		label: '自营',
		value: '5'
	}
]

const NodePlatformType = [
	{
		label: '现货',
		value: '0'
	},
	{
		label: '两融',
		value: '1'
	},
	{
		label: '期权',
		value: '2'
	},
	{
		label: '期货',
		value: '3'
	}
]

const OfferServerType = [
	{
		label: '交易报盘',
		value: '1'
	},
	{
		label: '转账报盘',
		value: '2'
	},
	{
		label: '行情报盘',
		value: '3'
	}
]

const CreditPositionType = [
	{
		label: '普通',
		value: '0'
	},
	{
		label: '专项',
		value: '1'
	}
]
//  注意该字典在展期权限中去除了通用
const CreditDebtType = [
	{
		label: '通用（内部使用）',
		value: ''
	},
	{
		label: '融资',
		value: '0'
	},
	{
		label: '融券',
		value: '1'
	}
]

const ReferenceType = [
	{
		label: '维持担保比例',
		value: '1'
	},
	{
		label: '全体客户单一科创板市值',
		value: 'z'
	}
]

const PlanType = [
	{
		label: '标准套餐',
		value: '0'
	},
	{
		label: '智能套餐',
		value: '1'
	}
	// ,
	// {
	//     label: '预留1',
	//     value: '2'
	// },
	// {
	//     label: '预留2',
	//     value: '3'
	// },
	// {
	//     label: '未定义类型（内部使用）',
	//     value: '4'
	// }
]

const Bforbidden = [
	{
		value: 0,
		label: '否'
	},
	{
		value: 1,
		label: '是'
	}
]

const BrokerRiskScaleIndicator = [
	{
		value: 'a',
		label: '全体客户科创板0证券融资负债规模和融券负债规模上限控制（大于N个交易日）'
	},
	{
		value: 'b',
		label: '全体客户科创板0证券融资负债规模上限控制（大于N个交易日）'
	},
	{
		value: 'c',
		label: '全体客户科创板0证券融券负债规模上限控制（大于N个交易日）'
	},
	{
		value: 'd',
		label: '全体客户科创板1证券融资负债规模和融券负债规模上限控制（不大于N个交易日）'
	},
	{
		value: 'e',
		label: '全体客户科创板1证券融资负债规模上限控制（不大于N个交易日）'
	},
	{
		value: 'f',
		label: '全体客户科创板1证券融券负债规模上限控制（不大于N个交易日）'
	},
	{
		value: 'g',
		label: '全体客户单证券市值不能超过设置的值'
	},
	{
		value: 'h',
		label: '全体客户单一证券融资金额占净资本的比例'
	},
	{
		value: 'i',
		label: '全体客户单一证券融券金额占净资本的比例'
	},
	{
		value: 'j',
		label: '全体客户单一证券融资买入股数占该证券流通股本的比例'
	},
	{
		value: 'k',
		label: '全体客户单一证券融券卖出股数占该证券流通股本的比例'
	},
	{
		value: 'l',
		label: '全体客户参与科创板融资融券业务规模占净资本的比例'
	},
	{
		value: 'm',
		label: '全体客户科创板证券融资负债规模和融券负债规模上限控制'
	},
	{
		value: 'n',
		label: '全体客户科创板证券融资负债规模上限控制'
	},
	{
		value: 'o',
		label: '全体客户科创板证券融券负债规模上限控制'
	},
	{
		value: 'p',
		label: '全体客户单一担保证券市值与该证券总市值比例'
	},
	{
		value: 'q',
		label: '全体客户融资融券负债规模上限控制'
	},
	{
		value: 'r',
		label: '全体客户融资负债规模上限控制'
	},
	{
		value: 's',
		label: '全体客户融券负债规模上限控制'
	},
	{
		value: 't',
		label: '全体客户创业板(核准制+注册制)股票融资规模上限'
	},
	{
		value: 'u',
		label: '全体客户创业板股票(注册制)融资规模上限'
	},
	{
		value: 'v',
		label: '全体客户创业板(核准制+注册制)股票融券规模上限'
	},
	{
		value: 'w',
		label: '全体客户创业板股票(注册制)融券规模上限'
	}
]

const InvestorRiskScaleIndicator = [
	{
		value: 'A',
		label: '单一客户单一证券融资买入股数占该证券流通股本的比例'
	},
	{
		value: 'B',
		label: '单一客户单一证券融券卖出股数占该证券流通股本的比例'
	},
	{
		value: 'C',
		label: '单一客户所有科创板市值不能超过设置的值'
	},
	{
		value: 'D',
		label: '单一客户单证券市值不能超过设置的值'
	},
	{
		value: 'E',
		label: '单一客户科创板证券融资负债规模不能超过设置的值'
	},
	{
		value: 'F',
		label: '单一客户科创板证券融券负债规模不能超过设置的值'
	},
	{
		value: 'G',
		label: '单一客户科创板0证券融资负债规模不能超过设置的值（大于N个交易日）'
	},
	{
		value: 'H',
		label: '单一客户科创板0证券融券负债规模不能超过设置的值（大于N个交易日）'
	},
	{
		value: 'I',
		label: '单一客户科创板1证券融资负债规模不能超过设置的值（不大于N个交易日）'
	},
	{
		value: 'J',
		label: '单一客户科创板1证券融券负债规模不能超过设置的值（不大于N个交易日）'
	},
	{
		value: 'N',
		label: '单一客户单一证券净空头/该客户信用账户总资产'
	},
	{
		value: 'O',
		label: '单一客户单一证券净多头/该客户信用账户总资产'
	},
	{
		value: 'a',
		label: '单一客户单一证券净空头/该客户信用账户净资产'
	},
	{
		value: 'b',
		label: '单一客户(创业板注册制+科创板)集中度'
	},
	{
		value: 'c',
		label: '单一客户(创业板注册制+科创板)(大于5个交易日)集中度'
	},
	{
		value: 'd',
		label: '单一客户(创业板注册制+科创板)(前5个交易日)集中度'
	},
	{
		value: 'e',
		label: '单一客户创业板(核准制+注册制)净空头/该客户信用账户净资产比例'
	},
	{
		value: 'f',
		label: '单一客户创业板(注册制)净空头/该客户信用账户净资产比例'
	},
	{
		value: 'T',
		label: '单一客户所有科创板占总资产集中度'
	},
	{
		value: 'U',
		label: '单一客户科创板1占总资产集中度（不大于N个交易日）'
	},
	{
		value: 't',
		label: '单一客户所有科创板占总资产集中度展期控制'
	},
	{
		value: 'v',
		label: '单一客户科创板板块净空头/该客户信用账户净资产'
	},
	{
		value: 'V',
		label: '单一客户科创板板块净空头集中度'
	},
	{
		value: 'W',
		label: '单一客户科创板子板块1净空头集中度'
	},
	{
		value: 'x',
		label: '单一客户科创板板块净多头/该客户信用账户净资产'
	},
	{
		value: 'X',
		label: '单一客户科创板板块净多头集中度'
	},
	{
		value: 'Y',
		label: '单一客户科创板子板块1净多头集中度'
	},
	{
		value: 'Z',
		label: '单一客户单一证券占总资产集中度'
	},
	{
		value: '0',
		label: '单一客户单一证券占总市值集中度'
	},
	{
		value: '1',
		label: '单一客户融资规模占净资本比例'
	},
	{
		value: '2',
		label: '单一客户融券规模占净资本比例'
	},
	{
		value: '3',
		label: '单一客户融资融券规模占净资本比例'
	},
	{
		value: '4',
		label: '单一客户融资规模上限控制'
	},
	{
		value: '5',
		label: '单一客户融券规模上限控制'
	},
	{
		value: '6',
		label: '单一客户融资融券规模上限控制'
	},
	{
		value: '7',
		label: '单一客户科创板单一证券占总资产动态集中度设置'
	},
	{
		value: '8',
		label: '单一客户当日可买金额占总资产比例设置'
	}
]

const AMLLevel = [
	{
		value: '0',
		label: '高'
	},
	{
		value: '1',
		label: '中'
	},
	{
		value: '2',
		label: '低'
	}
]

const BApexData = [
	{
		value: '1',
		label: '顶点'
	},
	{
		value: '0',
		label: '奇点'
	}
]

const TransferApplyStatus = [
	{
		value: 0,
		label: '初始'
	},
	{
		value: 1,
		label: '申请成功'
	},
	{
		value: 2,
		label: '申请失败'
	},
	{
		value: 3,
		label: '在途业务检查中'
	},
	{
		value: 4,
		label: '等待投资者决策'
	},
	{
		value: 5,
		label: '已申报交易所'
	},
	{
		value: 6,
		label: '申请撤销'
	}
]

const EnforceFlag = [
	{
		value: 0,
		label: '初始'
	},
	{
		value: 1,
		label: '强制执行'
	},
	{
		value: 2,
		label: '放弃执行'
	}
]

const RegisterFlag = [
	{
		value: 0,
		label: '未指定'
	},
	{
		value: 1,
		label: '已指定'
	},
	{
		value: 2,
		label: '正指定'
	}
]

const CustodyTransferType = [
	{
		value: '0',
		label: '深圳转托管注册'
	},
	{
		value: '1',
		label: '深圳转托管撤单'
	}
]

const NodeTag = [
	{
		value: 'T0',
		label: 'T0'
	},
	{
		value: 'alpha',
		label: 'alpha'
	}
]
const NodeTagCred = [
	{
		value: 'T0',
		label: 'T0'
	},
	{
		value: 'alpha',
		label: 'alpha'
	},
	{
		value: 'WPFOF',
		label: 'WPFOF'
	}
]

const DepartmentIDHead = {
	departmentId: '0000',
	departmentName: '总公司'
}
const ControlLevel = [
	{
		value: '0',
		label: '全部投资者'
	},
	{
		value: '1',
		label: '一码通'
	},
	{
		value: '2',
		label: '投资者'
	},
	{
		value: '3',
		label: '股东账号'
	}
]
const Commandaction = [
	{
		value: '0',
		label: '插入'
	},
	{
		value: '1',
		label: '更新'
	},
	{
		value: '2',
		label: '删除'
	}
]
const Commandstatus = [
	{
		value: '0',
		label: '未处理'
	},
	{
		value: '1',
		label: '成功'
	},
	{
		value: '2',
		label: '失败'
	}
]

const ModelType = [
	{
		value: 1,
		label: '一码通层级'
	},
	{
		value: 2,
		label: '投资者层级'
	},
	{
		value: 3,
		label: '股东号层级'
	}
]
const ModelTypeCredit = [
	// {
	//     value: 1,
	//     label: '一码通层级'
	// },
	{
		value: 2,
		label: '投资者层级'
	},
	{
		value: 3,
		label: '股东号层级'
	}
]
const StategyMethod = [
	{
		value: 'type',
		label: '证券类别控制'
	},
	{
		value: 'cif',
		label: '交易所提示票控制'
	},
	{
		value: 'self',
		label: '单票控制'
	}
]
const RiskLevel = [
	{
		value: '1',
		label: '交易所提示票'
	},
	{
		value: '2',
		label: '合规波动标的'
	},
	{
		value: '3',
		label: '基础设施基金提示票'
	}
]
const SingularPlatformType = [
	{
		value: 'DEFAULT',
		label: '默认'
	},
	{
		value: 'STOCK',
		label: '现货'
	},
	{
		value: 'CREDIT',
		label: '两融'
	},
	{
		value: 'SP',
		label: '期权'
	},
	{
		value: 'CFFEX',
		label: '中金期货'
	},
	{
		value: 'SELF',
		label: '自营平台'
	}
]
const ProxyTypeOption = [
	{
		value: '1',
		label: '通配'
	},
	{
		value: '2',
		label: '指定投资者'
	},
	// {
	//     value: '3',
	//     label: '鑫科FOF'
	// },
	{
		value: '4',
		label: '无客户权限'
	}
]
const ProxyType = [
	{
		value: '1',
		label: '通配'
	},
	{
		value: '2',
		label: '指定投资者'
	},
	{
		value: '3',
		label: '指定12号节点'
	},
	{
		value: '4',
		label: '无客户权限'
	},
	{
		value: '5',
		label: '指定支点客户'
	}
]
const RegisterType = [
	{
		value: '0',
		label: 'TCP'
	},
	{
		value: '1',
		label: 'UDP'
	},
	{
		value: '2',
		label: 'Fens'
	}
]

const BusinessType = [
	{
		label: '现货',
		value: '0'
	},
	{
		label: '两融',
		value: '1'
	},
	{
		label: '期权',
		value: '2'
	}
]
const MarketType = [
	{
		label: '证券',
		value: '0'
	},
	{
		label: '期货',
		value: '1'
	},
	{
		label: '黄金',
		value: '2'
	}
]
// 现货新开户日志
const CustActiontype = [
	{
		value: '0',
		label: '新增'
	},
	{
		value: '1',
		label: '修改'
	},
	{
		value: '2',
		label: '删除'
	}
]
const CustStatus = [
	{
		value: '0',
		label: '未处理'
	},
	{
		value: '1',
		label: '已处理'
	}
]
//  与下面要同时修改
const ServerRoomLocation = [
	{
		value: 0,
		label: '上海金桥'
	},
	{
		value: 1,
		label: '宛平机房'
	},
	{
		value: 2,
		label: '东莞机房'
	}
]

const RiskScaleControlType = [
	{
		value: '0',
		label: '无'
	},
	{
		value: '1',
		label: '证券前五日'
	},
	{
		value: '2',
		label: '证券后五日'
	}
]

// 期权新需求
const VIPOptions = [
	{
		value: '11',
		label: '报单插入'
	},
	{
		value: '12',
		label: '报单操作'
	},
	{
		value: '13',
		label: '锁仓'
	},
	{
		value: '14',
		label: '锁定操作'
	},
	{
		value: '15',
		label: '行权'
	},
	{
		value: '16',
		label: '行权操作'
	},
	{
		value: '17',
		label: '证券处置'
	},
	{
		value: '18',
		label: '证券处置操作'
	},
	{
		value: '19',
		label: '组合拆分委托'
	},
	{
		value: '1a',
		label: '强制删除报单'
	},
	{
		value: '1b',
		label: '条件报单插入'
	},
	{
		value: '1c',
		label: '条件报单操作'
	},
	{
		value: '1d',
		label: '组合强拆委托'
	},
	{
		value: '1e',
		label: '查询公司结算保证金'
	},
	{
		value: '1f',
		label: '报价单插入'
	},
	{
		value: '20',
		label: '报价单操作'
	},
	{
		value: '21',
		label: '资金调拨'
	},
	{
		value: '22',
		label: '持仓调拨'
	},
	{
		value: '23',
		label: '银证转账'
	},
	{
		value: '24',
		label: '风险处置'
	},
	{
		value: '25',
		label: '风控监控'
	},
	{
		value: '31',
		label: '回传数据'
	},
	{
		value: '60',
		label: '查询席位相关：PBU、TradeOffer、MDServer'
	},
	{
		value: '61',
		label: '查询市场'
	},
	{
		value: '62',
		label: '查询证券信息'
	},
	{
		value: '63',
		label: '查询机构信息'
	},
	{
		value: '64',
		label: '查询柜员信息、角色赋权、功能权限、数据权限'
	},
	{
		value: '65',
		label: '查询角色'
	},
	{
		value: '66',
		label: '查询投资者信息:股东账户、Investor、User、关联账户'
	},
	{
		value: '67',
		label: '查询委托/撤单'
	},
	{
		value: '68',
		label: '查询成交'
	},
	{
		value: '69',
		label: '查询资金'
	},
	{
		value: '6a',
		label: '查询持仓'
	},
	{
		value: '6b',
		label: '查询投资者交易参数:费率、保证金率、条件单参数、交易权限、证券代码黑名单'
	},
	{
		value: '6c',
		label: '查询报单明细资金'
	},
	{
		value: '6d',
		label: '查询资金转移明细资金'
	},
	{
		value: '6e',
		label: '查询持仓转移流水'
	},
	{
		value: '6f',
		label: '查询经纪公司交易参数:费率模板、保证金模板、权限模板、持仓交易属性、基础交易费率、报单前缀、交易所回报序号'
	},
	{
		value: '6g',
		label: '查询交易通知'
	},
	{
		value: '6h',
		label: '查询用户事件'
	},
	{
		value: '6i',
		label: '查询系统参数'
	},
	{
		value: '6j',
		label: '查询应用程序相关'
	},
	{
		value: '6p',
		label: '查询条件单'
	},
	{
		value: '6q',
		label: '查询行权指派明细'
	},
	{
		value: '6r',
		label: '客户风控参数查询'
	},
	{
		value: '6s',
		label: '查询风控参数模板'
	},
	{
		value: '6t',
		label: '查询投资者模板代码'
	},
	{
		value: '6C',
		label: '查询终端信息'
	},
	{
		value: '6H',
		label: '查询投资者限制额度'
	},
	{
		value: '6J',
		label: '查询投资者费率'
	},
	{
		value: '6L',
		label: '查询基础交易费率'
	},
	{
		value: '6N',
		label: '查询费率模板管理调整'
	},
	{
		value: '80',
		label: '查询组合拆分后保证金变化额度'
	},
	{
		value: '41',
		label: '资金调整(红冲蓝补)'
	},
	{
		value: '42',
		label: '仓位调整(红冲蓝补)'
	},
	{
		value: '43',
		label: '证券信息调整'
	},
	{
		value: '44',
		label: '调整系统参数'
	},
	{
		value: '45',
		label: '内部组件运行配置'
	},
	{
		value: '46',
		label: '市场相关管理（市场状态/平台状态等）'
	},
	{
		value: '47',
		label: '终端信息管理'
	},
	{
		value: '48',
		label: '客户信息管理：禁用、启用、解锁、重置密码、登出、设置IP限制'
	},
	{
		value: '49',
		label: '柜员管理（增、删、改、分配操作权限、分配访问权限、禁用、启用、解锁、登出、重置密码、设置IP限制）'
	},
	{
		value: '4a',
		label: '席位管理'
	},
	{
		value: '4b',
		label: '机构信息管理'
	},
	{
		value: '4c',
		label: '角色管理（增、删、改角色）'
	},
	{
		value: '4d',
		label: '客户交易参数管理（增、删、改费率、保证金率、条件单参数、交易权限、证券代码黑名单）'
	},
	{
		value: '4e',
		label: '经纪公司交易参数管理（增、删、改费率模板、保证金模板、权限模板、持仓交易属性、基础交易费率、报单前缀、交易所回报序号）'
	},
	{
		value: '4f',
		label: '行权指派明细管理'
	},
	{
		value: '4g',
		label: '客户风控参数管理'
	},
	{
		value: '4h',
		label: '经纪公司风控参数管理'
	},
	{
		value: '4i',
		label: '投资者模板代码管理'
	},
	{
		value: '4j',
		label: '投资者额度限制管理'
	},
	{
		value: '4k',
		label: '投资者费率管理'
	},
	{
		value: '4l',
		label: '基础交易费率管理'
	},
	{
		value: '4m',
		label: '费率模板管理'
	},
	{
		value: '6k',
		label: '查询资金调整'
	},
	{
		value: '6l',
		label: '查询仓位调整'
	},
	{
		value: '6m',
		label: '查询柜员调整'
	},
	{
		value: '6n',
		label: '查询客户信息调整'
	},
	{
		value: '6o',
		label: '查询角色调整'
	},
	{
		value: '6u',
		label: '查询系统参数调整'
	},
	{
		value: '6v',
		label: '查询应用信息调整'
	},
	{
		value: '6w',
		label: '查询投资者交易参数调整'
	},
	{
		value: '6x',
		label: '查询经纪公司交易参数调整'
	},
	{
		value: '6y',
		label: '查询证券信息调整'
	},
	{
		value: '6z',
		label: '查询市场管理信息调整'
	},
	{
		value: '6A',
		label: '查询报盘席位调整'
	},
	{
		value: '6B',
		label: '查询经纪公司部门信息调整'
	},
	{
		value: '6D',
		label: '查询行权指派明细调整'
	},
	{
		value: '6E',
		label: '查询客户风控参数调整'
	},
	{
		value: '6F',
		label: '查询风控参数模板调整'
	},
	{
		value: '6G',
		label: '查询终端信息调整'
	},
	{
		value: '6I',
		label: '查询投资者限制额度调整'
	},
	{
		value: '6K',
		label: '查询投资者费率调整'
	},
	{
		value: '6M',
		label: '查询基础交易费率调整'
	},
	{
		value: '6O',
		label: '查询费率模板管理调整'
	},
	{
		value: '6P',
		label: '查询投资者信息模板代码调整'
	},
	{
		value: '51',
		label: '复核资金调整'
	},
	{
		value: '52',
		label: '复核仓位调整'
	},
	{
		value: '53',
		label: '复核柜员管理'
	},
	{
		value: '54',
		label: '复核客户信息管理'
	},
	{
		value: '55',
		label: '复核角色管理'
	},
	{
		value: '56',
		label: '复核资金账户管理'
	},
	{
		value: '57',
		label: '复核投资者模板代码管理'
	},
	{
		value: '58',
		label: '复核经纪公司风控参数'
	},
	{
		value: '59',
		label: '复核系统参数'
	},
	{
		value: '5a',
		label: '复核内部运行组件管理'
	},
	{
		value: '5b',
		label: '复核投资者交易参数管理'
	},
	{
		value: '5c',
		label: '复核经纪公司交易参数管理'
	},
	{
		value: '5d',
		label: '复核证券信息'
	},
	{
		value: '5e',
		label: '复核市场管理'
	},
	{
		value: '5f',
		label: '复核报盘席位管理'
	},
	{
		value: '5g',
		label: '复核终端信息管理'
	},
	{
		value: '5h',
		label: '复核行权指派明细管理'
	},
	{
		value: '5i',
		label: '复核经纪公司部门管理'
	},
	{
		value: '5j',
		label: '复核风控参数模板管理'
	},
	{
		value: '5k',
		label: '复核投资者额度限制管理'
	},
	{
		value: '5l',
		label: '复核投资者费率管理'
	},
	{
		value: '5m',
		label: '复核基础交易费率管理'
	},
	{
		value: '5n',
		label: '复核费率模板管理'
	},
	{
		value: '70',
		label: '记录操作日志'
	}
]
const EncodeModeOption = [
	{
		value: '0',
		label: '明文'
	},
	{
		value: '1',
		label: '集中交易加密(FIX等)'
	},
	{
		value: '2',
		label: 'AES加密'
	},
	{
		value: '3',
		label: 'SHA加密'
	},
	{
		value: '4',
		label: 'MD5加密'
	}
]
const InvestorLevelOption = [
	{
		value: '0',
		label: '不合格投资人'
	},
	{
		value: '1',
		label: '一级'
	},
	{
		value: '2',
		label: '二级'
	},
	{
		value: '3',
		label: '三级'
	}
]
const ShareholderIDTypeOption = [
	{
		value: '0',
		label: '未知'
	},
	{
		value: '1',
		label: '普通'
	},
	{
		value: '2',
		label: '信用'
	},
	{
		value: '3',
		label: '衍生品'
	}
]
const ProductIDOption = [
	{
		value: '0',
		label: '通用(内部使用)'
	},
	{
		value: '1',
		label: '上海股票'
	},
	{
		value: '3',
		label: '上海基金'
	},
	{
		value: '4',
		label: '上海债券'
	},
	{
		value: '7',
		label: '深圳股票'
	},
	{
		value: '9',
		label: '深圳基金'
	},
	{
		value: 'a',
		label: '深圳债券'
	},
	{
		value: 'd',
		label: '上海个股期权'
	},
	{
		value: 'e',
		label: '深圳个股期权'
	}
]
const SecurityTypeOption = [
	{
		value: '0',
		label: '通用(内部使用)'
	},
	{
		value: '1',
		label: '上海股票型看涨期权'
	},
	{
		value: '2',
		label: '上海股票型看跌期权'
	},
	{
		value: '3',
		label: '上海基金型看涨期权'
	},
	{
		value: '4',
		label: '上海基金型看跌期权'
	},
	{
		value: '5',
		label: '深圳股票型看涨期权'
	},
	{
		value: '6',
		label: '深圳股票型看跌期权'
	},
	{
		value: '7',
		label: '深圳基金型看涨期权'
	},
	{
		value: '8',
		label: '深圳基金型看跌期权'
	},
	{
		value: '9',
		label: '上海组合期权'
	},
	{
		value: 'a',
		label: '深圳组合期权'
	}
]
const BusinessClassOption = [
	{
		value: 'A',
		label: '买入开仓'
	},
	{
		value: 'B',
		label: '买入平仓'
	},
	{
		value: 'C',
		label: '卖出开仓'
	},
	{
		value: 'D',
		label: '卖出平仓'
	},
	{
		value: 'E',
		label: '备兑开仓'
	},
	{
		value: 'F',
		label: '备兑平仓'
	},
	{
		value: 'G',
		label: '行权'
	},
	{
		value: 'H',
		label: '单边平仓（单平义务仓）'
	},
	{
		value: 'I',
		label: '无效'
	},
	{
		value: 'J',
		label: '报价买入开仓'
	},
	{
		value: 'K',
		label: '报价买入平仓'
	},
	{
		value: 'L',
		label: '报价卖出开仓'
	},
	{
		value: 'M',
		label: '报价卖出平仓'
	}
]
const CombinationStatusOption = [
	{
		value: '1',
		label: '组合'
	},
	{
		value: '3',
		label: '拆分完成'
	}
]
const CombinationStrategyOption = [
	{
		value: '1',
		label: '认购牛市价差策略'
	},
	{
		value: '2',
		label: '认购熊市价差策略'
	},
	{
		value: '3',
		label: '认沽熊市价差策略'
	},
	{
		value: '4',
		label: '认沽牛市价差策略'
	},
	{
		value: '5',
		label: '跨式空头'
	},
	{
		value: '6',
		label: '宽跨式空头'
	},
	{
		value: '7',
		label: '保证金开仓转备兑'
	},
	{
		value: '8',
		label: '备兑仓转普通'
	}
]
const OptionsTypeOption = [
	{
		value: '1',
		label: '看涨'
	},
	{
		value: '2',
		label: '看跌'
	}
]
const OffsetFlagOption = [
	{
		value: '0',
		label: '开仓'
	},
	{
		value: '1',
		label: '平仓'
	},
	{
		value: '2',
		label: '强平'
	},
	{
		value: '3',
		label: '平今'
	},
	{
		value: '4',
		label: '平昨'
	},
	{
		value: '5',
		label: '强减'
	},
	{
		value: '6',
		label: '本地强平'
	},
	{
		value: '7',
		label: '行权（内部使用）'
	},
	{
		value: '8',
		label: '锁定（内部使用）'
	},
	{
		value: '9',
		label: '解锁（内部使用）'
	},
	{
		value: 'a',
		label: '组合（内部使用）'
	},
	{
		value: 'b',
		label: '拆分（内部使用）'
	},
	{
		value: 'e',
		label: '单边平仓'
	}
]

const OptionsStatus = [
	{
		value: '1',
		label: '启用'
	},
	{
		value: '2',
		label: '禁用'
	},
	{
		value: '4',
		label: '锁定'
	}
]

const NecessaryList = [
	{
		value: '0',
		label: '否'
	},
	{
		value: '1',
		label: '是'
	}
]

export default {
	NodeStatus, // 节点状态
	TempleType, // 模版类型
	RecordStatus, // 记录状态
	TransactionType, // 事务类型
	DataStatus, // 节点数据状态
	BrokerageType, // 佣金类型
	ExchangeID, // 交易所类型
	DataSyncStatus, // 数据同步状态
	MdbExecutedStatus, // Mdb执行状态
	ConnectStatus, // 连接状态
	MarketID, // 市场代码
	ProductID, // 证券品种代码
	PlatformType, // 平台类型
	CurrencyID, // 币种
	OrderUnit, // 申报单位
	QualificationClass, // 投资者适当性管理类别
	QualificationType, // 投资者债券适当性类别
	ProfInvestorType, // 专业投资者类别
	IdCardType, // 证件类型
	TradingStatus, // 交易状态
	ShareholderIDType, // 股东账户类型
	AccountType, // 资金账户类型
	BankID, // 银行代码
	TransferDirection, // 转移方向
	TransferStatus, // 转移状态
	OperateSource, // 操作来源
	UserType, // 用户类型
	LoginStatus, // 登录状态
	RangeMode, // 范围模式
	Direction, // 报单方向
	PosLimitType, // 限仓类型
	SpecPrivilegeType, // 特殊权限类别
	TransferPositionType, // 转移持仓类型
	MDSecurityStat, // 行情证券状态
	PositionTradingFlag, // 持仓交易标志
	CreRedType, // 申赎类型
	ETFCurrenceReplaceStatus, // ETF现金替代标志
	IssueMode, // 发行方式
	BizClass, // 业务类型
	OrderPriceType, // 报单价格条件
	TimeCondition, // 有效期类型
	VolumeCondition, // 成交量类型
	LotType, // 港股订单数量类型
	Operway, // 委托方式
	CondCheck, // 委托条件检查
	OrderStatus, // 报单状态
	OrderSubmitStatus, // 报单提交状态
	OrderType, // 报单类型
	ActionFlag, // 操作标志
	CancelOrderStatus, // 撤单状态
	CancelOrderType, // 撤单类型
	PriceTickID, // 价差品种
	PriceTickType, // 价差类别
	ParamType, // 股东参数类型
	FundType, // 基金类型
	TBStatus, // 交易业务管理状态
	VIP, // VIP权限
	SVIP, // VIP权限中比较重要的部分
	VipCredit, // VIP两融权限
	InvestorType, // 投资者类型
	NodePlatformType, // 节点平台类型
	OfferServerType, // 报盘类型
	CreditPositionType, // 头寸类型
	CreditDebtType, // 信用负债类型
	ReferenceType, // 参考值类型
	PlanType, // 套餐类型
	Bforbidden, // 是否禁止
	BrokerRiskScaleIndicator, // 经纪公司风控规模指标
	InvestorRiskScaleIndicator, // 投资者风控规模指标
	AMLLevel, // 反洗钱等级
	BApexData, // 权限模式（奇点，顶点）
	TransferApplyStatus, // 转托管申请状态(非报单)
	EnforceFlag, // 转托管申请是否强制执行
	RegisterFlag, // 指定状态
	CustodyTransferType, // 转托管类型
	NodeTag, // 节点配置节点标签现货
	NodeTagCred, // 节点配置节点标签两融
	DepartmentIDHead,
	ControlLevel, // 投资者控制级别
	Commandaction, // 操作类别
	Commandstatus, // 状态
	ModelType, // 层级类型
	ModelTypeCredit, // 两融层级类型暂时
	StategyMethod, // 策略解析方式
	RiskLevel, // 高危证券
	SingularPlatformType, // 日志平台
	ProxyTypeOption, // 代理类型期权
	ProxyType,
	RegisterType, // 注册类型
	BusinessType, // 业务类型
	MarketType, // 市场类型
	CustActiontype, // 操作类型
	CustStatus, // 状态
	ServerRoomLocation, // 机房位置
	RiskScaleControlType, // 风险规模控制
	// 期权
	VIPOptions, // 权限
	EncodeModeOption, // 加密方式
	InvestorLevelOption, // 投资者分级类别
	ShareholderIDTypeOption, // 股东代码类型
	ProductIDOption, // 合约品种代码
	SecurityTypeOption, // 合约类别
	BusinessClassOption, // 业务类别
	CombinationStatusOption, // 组合持仓状态
	CombinationStrategyOption, // 组合策略
	OptionsTypeOption, // 期权类型
	OffsetFlagOption, // 开平标志
	OptionsStatus, // 期权投资者状态
	NecessaryList // 是否需要注册
}
