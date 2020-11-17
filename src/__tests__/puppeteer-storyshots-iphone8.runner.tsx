import initStoryshots from '@storybook/addon-storyshots'
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'
import devices from 'puppeteer/lib/cjs/puppeteer/common/DeviceDescriptors'

const customizePage = (page) => {
  return page.emulate(devices['iPhone 8'])
}

initStoryshots({
  suite: 'Image storyshots: iPhone 8',
  test: imageSnapshot({ customizePage }),
})
