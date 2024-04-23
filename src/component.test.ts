import Sparkly from './component'
Sparkly.register()
import { aTimeout, expect, fixture } from '@open-wc/testing'

describe('<sparkly-view>', () => {
  let el: HTMLElement & {
    canclick?: boolean
    color?: string
    minsize?: number
    maxsize?: number
  }

  it('works', async () => {
    el = await fixture(`<sparkly-view><p>hello world</p></sparkly-view>`)
    expect(el.shadowRoot!.querySelector('.sparkly')).to.exist
    expect(el.shadowRoot!.querySelectorAll('.sparkly .wrap').length).to.greaterThan(1)
    expect(el.querySelector('p')!.innerText).to.equal('hello world')
    let sparker = el.shadowRoot!.querySelector('.sparkly .wrap')
    await aTimeout(1000)
    expect(el.shadowRoot!.querySelector('.sparkly .wrap')).to.not.equal(sparker)
  })

  it('default attribute', async () => {
    el = await fixture(`<sparkly-view><p>hello world</p></sparkly-view>`)
    expect(el.canclick).to.equal(false)
    expect(el.color).to.equal('#FFC700')
    expect(el.minsize).to.equal('10')
    expect(el.maxsize).to.equal('20')
  })

  it('customize attribute', async () => {
    el = await fixture(`
      <sparkly-view canclick="true" color="red" minsize="12" maxsize="24">
        <p>hello world</p>
      </sparkly-view>
    `)
    expect(el.canclick).to.equal(true)
    expect(el.color).to.equal('red')
    expect(el.minsize).to.equal('12')
    expect(el.maxsize).to.equal('24')
  })

  it('change attribute', async () => {
    el = await fixture(`
      <sparkly-view canclick="true" color="red" minsize="12" maxsize="24">
        <p>hello world</p>
      </sparkly-view>
    `)
    el.canclick = false
    el.color = 'yellow'
    el.minsize = 13
    el.maxsize = 26
    expect(el.canclick).to.equal(false)
    expect(el.color).to.equal('yellow')
    expect(el.minsize).to.equal('13')
    expect(el.maxsize).to.equal('26')
  })

  it('click Event', async () => {
    el = await fixture(`<sparkly-view canclick="true"><p>hello world</p></sparkly-view>`)
    expect(el.shadowRoot!.querySelector('.sparkly')!.children.length).to.equal(2)
    el.querySelector('p')!.click()
    expect(el.shadowRoot!.querySelector('.sparkly')!.children.length).to.equal(1)
  })

  it('unload Event', async () => {
    el = await fixture(`<sparkly-view><p>hello world</p></sparkly-view>`)
    window.dispatchEvent(new Event('beforeunload'))
    expect(el.shadowRoot!.querySelector('.sparkly')!.children.length).to.equal(1)
  })
})
