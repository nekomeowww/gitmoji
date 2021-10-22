import React from 'react'
import Link from 'next/link'

// import CarbonAd from 'src/components/CarbonAd'
import Button from 'src/components/Button'
import SEO from 'src/components/SEO'

const About = () => (
  <>
    <SEO pageTitle="About" pageUrl="/about" />
    <main>
      {/* <CarbonAd /> */}
      <section>
        <h1>关于</h1>

        <p>
          <strong>Gitmoji 是一个提交信息的 Emoji 速查表指南</strong>. 旨在成为在
          GitHub 的提交消息上使用 <a href="https://emoji.muan.co">emojis</a>{' '}
          的标准化速查表
        </p>

        <p>
          在 <strong>提交信息</strong> 中使用 <strong>Emoji</strong> 提供了一个
          <strong>通过快速查看 Emoji 的类型</strong>的方法来快速{' '}
          <strong>确定一个提交的目的和原意</strong>
          。由于存在许多不同的表情符号，
          我发现有必要创建一个指南，以帮助更轻松地使用 Emoji。
        </p>

        <p>
          这个项目是开源的，这意味着每个人都可以参与，建议，讨论和添加新的表情符号。你可以查阅{' '}
          <Link href="#contributing-gitmoji">
            <a>贡献者列表</a>
          </Link>{' '}
          以及{' '}
          <a href="https://github.com/carloscuesta/gitmoji/blob/master/.github/CONTRIBUTING.md">
            贡献指南
          </a>
          .
        </p>

        <div>
          <Button
            icon="twitter"
            link={
              'https://twitter.com/intent/tweet?text=gitmoji' +
              '%20%E2%80%93%20An%20%23emoji%20guide%20for%20your%20commit' +
              '%20messages%20by%20%40crloscuesta%20%F0%9F%98%8D%F0%9F%98%9C' +
              '&url=https://gitmoji.dev'
            }
            target="_blank"
            text="发推"
          />
        </div>
      </section>

      <section>
        <h1>
          在 npm 中使用 gitmoji{' '}
          <a href="https://github.com/carloscuesta/gitmoji-cli">gitmoji-cli</a>
        </h1>

        <p>
          从命令行使用 gitmoji 的一个简单解决方案是安装{' '}
          <a href="https://github.com/carloscuesta/gitmoji-cli">gitmoji-cli</a>
          ： gitmoji 交互式客户端，用于在提交消息上使用 Emoji。
        </p>

        <pre>
          <code>$ npm i -g gitmoji-cli</code>
        </pre>
      </section>

      <section>
        <h1 id="contributing-gitmoji">参与贡献 gitmoji</h1>

        <p>
          为 gitmoji 贡献一份 🍰 ！该项目是一个静态网站，使用 Next.js
          构建。显示的所有 gitmojis 都是从 JSON
          文件呈现的。在提交任何拉取请求之前，请遵循以下步骤:
        </p>

        <ol>
          <li>
            <a href="https://github.com/carloscuesta/gitmoji/issues/new">
              创建一个议题
            </a>{' '}
            并填写我们提供的模版。
          </li>
          <li>
            讨论想法，功能或建议后，{' '}
            <a href="https://github.com/carloscuesta/gitmoji/fork">
              复刻 gitmoji 仓库
            </a>
          </li>
          <li>
            为你的新特性创建一个新的分支。 (比如: add-emoji-deploy,
            fix-website-header)
          </li>
          <li>
            把你的更改提交到分支来创建{' '}
            <a href="https://help.github.com/articles/creating-a-pull-request/">
              拉取请求{' '}
            </a>
            .
          </li>
        </ol>
      </section>
    </main>
  </>
)

export default About
