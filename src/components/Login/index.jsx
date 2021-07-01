import React, { Component } from 'react';

import './index.css'
import { UserOutlined } from '@ant-design/icons';
import { Input,Button ,Avatar} from 'antd';
import 'antd/dist/antd.css'

class Login extends Component {

    state = {
        isloading:false
    }

    dologin = () => {
        console.log('点击了登录');
        const {username,pwd} = this
        console.log('=======',username.state.value,pwd.state.value);
        this.props.history.push({pathname:'/home',state:{name:'zs'}})
    }
    
    render() {
        return (
            <div>
                <div className='login_icon_container'>
                  <Avatar className='login_icon' size={60} icon={<UserOutlined />} />
                </div>
                <div className='login_name_container'>
                    <Input className='login_name' size="large" placeholder="请输入账号" prefix={<UserOutlined />} ref={c => this.username = c}/>
                </div>
                <div className='login_name_container'>
                    <Input className='login_pwd' size="large" placeholder="请输入密码" prefix={<img className='pwd_icon' src="https://csdnimg.cn/medal/qixiebiaobing1@240.png" alt="" />} ref={c => this.pwd = c} />
                </div>
                <div className='login_button_container'>
                    <Button type="primary" block onClick={this.dologin}>登录</Button>
                </div>
            </div>
        );
    }
}

export default Login;