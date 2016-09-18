- git init
- git add README.md
- git commit -m "first commit"
- git remote add origin https://github.com/buaashuai/spa.git
- git push -u origin master
- git add .        //添加当前目录下的全部文件

- git log  // 查看提交日志

- git config -l   // 查看git的配置
- git config --global user.name yangyang22   // 更改git的用户名
- git config --global user.email yangyang22@baidu.com // 更改git的邮箱

- git config [—global] get remote.origin.push    // 获取配置项
- git config --global --unset remote.origin.push   //删除配置项
- git config --global —add remote.origin.push 'refs/heads/*:refs/for/*' //添加配置项

// 更换仓库地址
- git remote rm origin 
- git remote add origin git@github.com:Liutos/foobar.git 
