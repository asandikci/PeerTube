import { getCheckbox, go } from '../utils'

export class AdminConfigPage {

  async navigateTo (tab: 'instance-homepage' | 'basic-configuration' | 'instance-information') {
    const waitTitles = {
      'instance-homepage': 'INSTANCE HOMEPAGE',
      'basic-configuration': 'APPEARANCE',
      'instance-information': 'INSTANCE'
    }

    await go('/admin/config/edit-custom#' + tab)

    await $('.inner-form-title=' + waitTitles[tab]).waitForDisplayed()
  }

  async updateNSFWSetting (newValue: 'do_not_list' | 'blur' | 'display') {
    const elem = $('#instanceDefaultNSFWPolicy')

    await elem.waitForDisplayed()
    await elem.scrollIntoView(false) // Avoid issues with fixed header on firefox
    await elem.waitForClickable()

    return elem.selectByAttribute('value', newValue)
  }

  updateHomepage (newValue: string) {
    return $('#instanceCustomHomepageContent').setValue(newValue)
  }

  async toggleSignup () {
    const checkbox = await getCheckbox('signupEnabled')

    await checkbox.waitForClickable()
    await checkbox.click()
  }

  async save () {
    const button = $('input[type=submit]')

    await button.waitForClickable()
    await button.click()
  }
}
