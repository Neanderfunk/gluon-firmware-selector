/*
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var config = {
  // list images on console that match no model
  listMissingImages: true,
  // see devices.js for different vendor model maps
  vendormodels: vendormodels,
  // set enabled categories of devices (see devices.js)
  enabled_device_categories: ["recommended"],
  // community prefix of the firmware images
  community_prefix: 'gluon-',
  // firmware version regex
  version_regex: '([a-z]+.[0-9]+.[0-9]+.[0-9]+([+-~][0-9]+)?)[.-]',
  // relative image paths and branch
  directories: {
    'http://beta.ffnef.de/images/experimental/ffnef-multidomain/factory/': 'experimental',
    'http://beta.ffnef.de/images/experimental/ffnef-multidomain/sysupgrade/': 'experimental',
    'http://beta.ffnef.de/images/beta/ffnef-multidomain/factory/': 'beta',
    'http://beta.ffnef.de/images/beta/ffnef-multidomain/sysupgrade/': 'beta',
    'http://beta.ffnef.de/images/stable/ffnef-multidomain/factory/': 'stable',
    'http://beta.ffnef.de/images/stable/ffnef-multidomain/sysupgrade/': 'stable'
  },
  // branch descriptions shown during selection
  branch_descriptions: {
    stable: 'Gut getestet, zuverlässig und stabil.',
    beta: 'Vorabtests neuer Stable-Kandidaten.',
    experimental: 'Ungetestet, automatisch generiert.'
  },
  // recommended branch will be marked during selection
  recommended_branch: 'stable',
  // experimental branches (show a warning for these branches)
  experimental_branches: ['experimental'],
  // path to preview pictures directory
  preview_pictures: 'pictures/',
  // link to changelog
  changelog: 'CHANGELOG.html'
};