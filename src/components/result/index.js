import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {
    Row,
    Col,
    Card,
    Button,
    Icon,
    Input,
    Table,
    Divider,
    Modal,
    Form
} from '@antd'
import './index.css'
export default class Result extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.viewDetail = () => {

        }
    }
    render() {
        const columns = [
            {
                title: '学员姓名',
                dataIndex: 'name',
                key: 'name',
                render: text => <a href="#">{text}</a>
            }, {
                title: '考试时间',
                dataIndex: 'time',
                key: 'time'
            }, {
                title: '考试时长/分钟',
                dataIndex: 'lasting',
                key: 'lasting'
            }, {
                title: '成绩',
                dataIndex: 'result',
                key: 'result'
            },{
                title: '总分',
                dataIndex: 'all',
                key: 'all'
            },{
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <div>
                        <Link
                            className="func"
                            onClick={this
                            .viewDetail
                            .bind(this, record)}
                            to={`/result/${record.key}`}
                            >考试详情</Link>
                    </div>
                )
            }
        ];
        const formItemLayout = {
            labelCol: {
                xs: {
                    span: 24
                },
                sm: {
                    span: 4
                }
            },
            wrapperCol: {
                xs: {
                    span: 24
                },
                sm: {
                    span: 20
                }
            }
        };

        const data = [
            {
                key: '1',
                name: 'John Brown',
                lasting: 20,
                result: 30,
                all: 100,
                time: '2017-12-25 14:45'
            }, {
                key: '2',
                name: 'Jim Green',
                lasting: 20,
                result: 30,
                all: 100,
                phone: 15111111111,
                time: '2017-12-25 14:45'
            }, {
                key: '3',
                name: 'Joe Black',
                lasting: 20,
                result: 30,
                all: 100,
                phone: 15111111111,
                time: '2017-12-25 14:45'
            }
        ];
        return (
            <Card className="stulist tablebody" title="成绩管理" bordered={false}>
                {
                    this.props.search ? <div className="searchbox">
                    <Input.Search className="search-input" placeholder="请输入学员姓名" enterButton="搜索"/>
                </div> : null
                }
                <p>{this.props.title}</p>
                <Table columns={columns} dataSource={data}/>
            </Card>
        )
    }
}