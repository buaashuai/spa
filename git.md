- git init
- git add README.md
- git commit -m "first commit"
- git remote add origin https://github.com/buaashuai/spa.git
- git push -u origin master
- git checkout v0.1.1  // �л���ָ����֧
- git checkout -b test v0.1.1  // ����һ������ v0.1.1 �ķ�֧test
- git add .        //��ӵ�ǰĿ¼�µ�ȫ���ļ�

- git branch -a   // �鿴Զ�̷�֧

- git branch   // �鿴���ط�֧

- git branch test // ������֧

- git checkout test   // �л���֧��test

- git branch -d xxx   // ɾ�����ط�֧

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
����
- git remote set-url --push[name][newUrl]

Զ�ֿ̲��������
����ֿ⣺$ git clone git://github.com/jquery/jquery.git
�鿴Զ�ֿ̲⣺$ git remote -v
���Զ�ֿ̲⣺$ git remote add [name] [url]
ɾ��Զ�ֿ̲⣺$ git remote rm [name]
�޸�Զ�ֿ̲⣺$ git remote set-url --push[name][newUrl]
��ȡԶ�ֿ̲⣺$ git pull [remoteName] [localBranchName]
����Զ�ֿ̲⣺$ git push [remoteName] [localBranchName]

��֧(branch)�����������
�鿴���ط�֧��$ git branch
�鿴Զ�̷�֧��$ git branch -r
�������ط�֧��$ git branch [name] ----ע���·�֧�����󲻻��Զ��л�Ϊ��ǰ��֧
�л���֧��$ git checkout [name]
�����·�֧�������л����·�֧��$ git checkout -b [name]
ɾ����֧��$ git branch -d [name] ---- -dѡ��ֻ��ɾ���Ѿ������˺ϲ��ķ�֧������δ�кϲ��ķ�֧���޷�ɾ���ġ������ǿ��ɾ��һ����֧������ʹ��-Dѡ��
�ϲ���֧��$ git merge [name] ----������Ϊ[name]�ķ�֧�뵱ǰ��֧�ϲ�
����Զ�̷�֧(���ط�֧push��Զ��)��$ git push origin [name]
ɾ��Զ�̷�֧��$ git push origin :heads/[name]
�Ҵ�master��֧������һ��issue5560��֧������һЩ�޸ĺ�ʹ��git push origin master�ύ��������ʾ�Ľ��ȴ��'Everything up-to-date'�����������ԭ����git push origin master ��û��trackԶ�̷�֧�ı��ط�֧��Ĭ���ύ��master��֧����Ϊmaster��֧Ĭ��ָ����origin master ��֧������Ҫʹ��git push origin issue5560��master �Ϳ��԰�issue5560���͵�Զ�̵�master��֧�ˡ�
�����ѱ��ص�ĳ����֧test�ύ��Զ�ֿ̲⣬����ΪԶ�ֿ̲��master��֧��������Ϊ����һ������test�ķ�֧����ô������ô����
$ git push origin test:master // �ύ����test��֧��ΪԶ�̵�master��֧ //����ֻд��һ�䣬Զ�̵�github�ͻ��Զ�����һ��test��֧
$ git push origin test:test // �ύ����test��֧��ΪԶ�̵�test��֧
�����ɾ��Զ�̵ķ�֧�أ����������棬���:��ߵķ�֧Ϊ�գ���ô��ɾ��:�ұߵ�Զ�̵ķ�֧��
$ git push origin :test // ���ύ��Զ�̵�test����ɾ�������Ǳ��ػ��ᱣ��ģ����õ���

�汾(tag)�����������
�鿴�汾��$ git tag
�����汾��$ git tag [name]
ɾ���汾��$ git tag -d [name]
�鿴Զ�̰汾��$ git tag -r
����Զ�̰汾(���ذ汾push��Զ��)��$ git push origin [name]
ɾ��Զ�̰汾��$ git push origin :refs/tags/[name]
��������tag: git push origin --tags

tagǨ��branch��
git checkout tagname
git checkout -b new_branch_name

4��git stash�ݴ��������
git stash: ���ݵ�ǰ�Ĺ����������ݣ��������һ���ύ�ж�ȡ������ݣ��ù�������֤���ϴ��ύ������һ�¡�ͬʱ������ǰ�Ĺ��������ݱ��浽Gitջ�С�
git stash pop: ��Gitջ�ж�ȡ���һ�α�������ݣ��ָ���������������ݡ����ڿ��ܴ��ڶ��Stash�����ݣ�������ջ������pop��������һ��stash�ж�ȡ���ݲ��ָ���
git stash list: ��ʾGitջ�ڵ����б��ݣ�������������б����������Ǹ��ط��ָ���
git stash clear: ���Gitջ����ʱʹ��gitg��ͼ�λ����߻ᷢ�֣�ԭ��stash����Щ�ڵ㶼��ʧ�ˡ�
 
5��git rebase ʹ��
��ǰ��֧����develop����master��ȡ���´���
git pull --rebase origin master ���� git rebase develop
�Ƚ�develop��֧�Ĵ���checkout��������Ϊ����Ŀ¼
Ȼ��master��֧��develop��֧����������иı�Ĳ��������δ��ϡ�����򲹶��Ĺ���û���⣬rebase�͸㶨��
����򲹶���ʱ����������⣬�ͻ���ʾ�㴦���ͻ��������ˣ���������git rebase �Ccontinue����ֱ�����
����㲻�봦���㻹��������ѡ��һ���Ƿ���rebase���̣�����git rebase �Cabort������һ����ֱ����test��֧��ȡ����ǰ��֧�ģ�git rebase �Cskip����
