- git init
- git add README.md
- git commit -m "first commit"
- git remote add origin https://github.com/buaashuai/spa.git
- git push -u origin master
- git add .        //��ӵ�ǰĿ¼�µ�ȫ���ļ�

- git log  // �鿴�ύ��־

- git config -l   // �鿴git������
- git config --global user.name yangyang22   // ����git���û���
- git config --global user.email yangyang22@baidu.com // ����git������

- git config [��global] get remote.origin.push    // ��ȡ������
- git config --global --unset remote.origin.push   //ɾ��������
- git config --global ��add remote.origin.push 'refs/heads/*:refs/for/*' //���������

// �����ֿ��ַ
- git remote rm origin 
- git remote add origin git@github.com:Liutos/foobar.git 
