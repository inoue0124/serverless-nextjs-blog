import initStoryshots from '@storybook/addon-storyshots'
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'
import devices from 'puppeteer/lib/cjs/puppeteer/common/DeviceDescriptors'

const customizePage: any = (page) => {
  return page.emulate(devices['iPad'])
}

initStoryshots({
  suite: 'Image storyshots: iPad',
  test: imageSnapshot({ customizePage }),
})
