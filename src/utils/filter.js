import Enum from './Enum'
import store from '@/store'

export function departmentIdFilter(value) {
	let str = value
	if (value === '0000') {
		str = '总公司'
	} else {
		store.getters.DepartmentID.map((item) => {
			if (value === item.departmentId) {
				str = item.departmentName
			}
		})
	}

	return str
}

export function securityIdFilter(value) {
	let str = value
	store.getters.SecurityID.map((item) => {
		if (value === item.securityId) {
			str = item.shortSecurityName
		}
	})
	return str
}

export function securityTypeFilter(value) {
	let str = value
	store.getters.SecurityType.map((item) => {
		if (value === item.securityValue) {
			str = item.securityLabel
		}
	})
	return str
}

export function nodeStatusFilter(value) {
	let str = value
	Enum.NodeStatus.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}
export function nodeClassFilter(value) {
	return value === 0 ? '未分配' : value
}
export function exchangeIdFilter(value) {
	let str = value
	Enum.ExchangeID.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}

export function productIdFilter(value) {
	let str = value
	Enum.ProductID.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}

export function bizClassFilter(value) {
	let str = value
	Enum.BizClass.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}

export function orderTypeFilter(value) {
	let str = value
	Enum.OrderType.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}

export function brokerageTypeFilter(value) {
	let str = value
	Enum.BrokerageType.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}

export function posLimitTypeFilter(value) {
	let str = value
	Enum.PosLimitType.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}

export function platformTypeFilter(value) {
	let str = value
	Enum.PlatformType.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}

export function directionFilter(value) {
	let str = value
	Enum.Direction.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}

export function marketIdFilter(value) {
	let str = value
	Enum.MarketID.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}

export function TBStatusFilter(value) {
	let str = value
	Enum.TBStatus.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}

export function InvestorTypeFilter(value) {
	let str = value
	Enum.InvestorType.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}

export function rangeModeFilter(value) {
	let str = value
	Enum.RangeMode.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}

export function shareholderIdTypeFilter(value) {
	let str = value
	Enum.ShareholderIDType.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}

export function qualificationTypeFilter(value) {
	let str = value
	Enum.QualificationType.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}

export function NodePlatformTypeFilter(value) {
	let str = value
	Enum.NodePlatformType.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}

export function OfferServerTypeFilter(value) {
	let str = value
	Enum.OfferServerType.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}

export function ConnectStatusFilter(value) {
	let str = value
	Enum.ConnectStatus.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}

export function CreditPositionTypeFilter(value) {
	let str = value
	Enum.CreditPositionType.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}

export function CreditDebtTypeFilter(value) {
	let str = value
	Enum.CreditDebtType.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}

export function ReferenceTypeFilter(value) {
	let str = value
	Enum.ReferenceType.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}

export function RecordStatusFilter(value) {
	let str = value
	Enum.RecordStatus.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}

export function bforbiddenFilter(value) {
	let str = value
	Enum.Bforbidden.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	if (value) {
		str = '是'
	} else {
		str = '否'
	}
	return str
}

export function moneyToCNFilter(value) {
	let str = value
	if (value) {
		const money = Math.floor(value)
		if (money / 1e12 > 1) {
			str = (money / 1e12).toFixed(2) + '万亿'
		} else if (money / 1e8 > 1) {
			str = (money / 1e8).toFixed(2) + '亿'
		} else if (money / 1e4 > 1) {
			str = (money / 1e4).toFixed(2) + '万'
		} else {
			str = money + '元'
		}
	} else if (value === 0) {
		str = '0元'
	}
	return str
}

export function moneyToTenThousand(value) {
	return (value / 10000).toFixed(2) + '万元'
}

export function moneyToInFilter(value) {
	let str = value
	if (value) {
		let temp = ''
		const moneyStr = value.toString()
		let money = []
		if (moneyStr.indexOf('.') !== -1) {
			money = moneyStr.substr(0, moneyStr.indexOf('.')).split('').reverse()
		} else {
			money = moneyStr.split('').reverse()
		}
		money.map((item, index) => {
			temp += item
			if ((index + 1) % 3 === 0 && index < money.length - 1) temp += ','
		})
		if (moneyStr.indexOf('.') !== -1) {
			str = temp.split('').reverse().join('') + moneyStr.substr(moneyStr.indexOf('.'))
		} else {
			str = temp.split('').reverse().join('')
		}
	} else if (value === 0) {
		str = '0'
	}
	return str
}

export function brokerRiskScaleIndicatorFilter(value) {
	let str = value
	Enum.BrokerRiskScaleIndicator.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}

export function investorRiskScaleIndicatorFilter(value) {
	let str = value
	Enum.InvestorRiskScaleIndicator.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}

export function AMLLevelFilter(value) {
	let str = value
	Enum.AMLLevel.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}

export function pbuTransferStatusFilter(value) {
	let str = value
	Enum.TransferStatus.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}

export function specPrivilegeTypeFilter(value) {
	let str = value
	Enum.SpecPrivilegeType.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}

export function bApexDataFilter(value) {
	let str = value
	Enum.BApexData.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}

export function currencyIdFilter(value) {
	let str = value
	Enum.CurrencyID.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}

export function transferApplyStatusFilter(value) {
	let str = value
	Enum.TransferApplyStatus.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}

export function enforceFlagFilter(value) {
	let str = value
	Enum.EnforceFlag.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}

export function orderStatusFilter(value) {
	let str = value
	Enum.OrderStatus.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}

export function orderSubmitStatusFilter(value) {
	let str = value
	Enum.OrderSubmitStatus.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}

export function registerFlagFilter(value) {
	let str = value
	Enum.RegisterFlag.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}

export function custodyTransferTypeFilter(value) {
	let str = value
	Enum.CustodyTransferType.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}

export function planTypeFilter(value) {
	let str = value
	Enum.PlanType.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}

// 投资者控制级别
export function controlLevelFilter(value) {
	let str = value
	Enum.ControlLevel.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}
// 操作类别
export function commandactionFilter(value) {
	let str = value
	Enum.Commandaction.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}
// 状态
export function commandstatusFilter(value) {
	let str = value
	Enum.Commandstatus.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}

// 层级
export function modelTypeFilter(value) {
	let str = value
	Enum.ModelType.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}
export function stategyMethodFilter(value) {
	let str = value
	Enum.StategyMethod.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}
export function riskLevelFilter(value) {
	let str = value
	Enum.RiskLevel.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}
export function profInvestorTypeFilter(value) {
	let str = value
	Enum.ProfInvestorType.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}
export function singularPlatformTypeFilter(value) {
	let str = value
	Enum.SingularPlatformType.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}
export function optionsStatusFilter(value) {
	let str = value
	Enum.OptionsStatus.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}
export function proxyTypeFilter(value) {
	let str = value
	Enum.ProxyType.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}
export function proxyTypeOptionFilter(value) {
	let str = value
	Enum.ProxyTypeOption.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}
export function registerTypeFilter(value) {
	let str = value
	Enum.RegisterType.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}
export function businessTypeFilter(value) {
	let str = value
	Enum.BusinessType.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}
export function marketTypeFilter(value) {
	let str = value
	Enum.MarketType.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}
export function necessaryFilter(value) {
	let str = value
	Enum.NecessaryList.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}

export function custActiontypeFilter(value) {
	let str = value
	Enum.CustActiontype.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}

export function custStatusFilter(value) {
	let str = value
	Enum.CustStatus.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}
export function serverRoomLocationFilter(value) {
	let str = value
	Enum.ServerRoomLocation.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}
export function riskScaleControlTypeFilter(value) {
	let str = value
	Enum.RiskScaleControlType.map((item) => {
		if (value === item.value) {
			str = item.label
		}
	})
	return str
}
