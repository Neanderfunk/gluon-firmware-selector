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
  community_prefix: 'gluon-nef-',
  // firmware version regex
 //  version_regex: '([a-z]+.[0-9]+.[0-9]+.[0-9]+([+-~][0-9]+)?)-',
  version_regex: '(([0-9][0-9](?:\_)[a-z]+)(?:\-)[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9](?:\sta\-))',
// relative image paths and branch
  directories: {
    	'./images/stable/02_met/sysupgrade/': 'Mettmann',
    	'./images/stable/02_met/factory/': 'Mettmann',
    	'./images/stable/10_wlf/sysupgrade/': 'Wülfrath',
   	'./images/stable/10_wlf/factory/': 'Wülfrath',
	'./images/stable/01_vel/sysupgrade/': 'Velbert',
	'./images/stable/01_vel/factory/': 'Velbert',
	'./images/stable/04_hld/sysupgrade/': 'Hilden',
	'./images/stable/04_hld/factory/': 'Hilden',
	'./images/stable/07_erk/sysupgrade/': 'Erkrath',
	'./images/stable/07_erk/factory/': 'Erkrath',
	'./images/stable/06_han/sysupgrade/': 'Haan',
	'./images/stable/06_han/factory/': 'Haan',
	'./images/stable/03_rat/sysupgrade/': 'Ratingen',
	'./images/stable/03_rat/factory/': 'Ratingen',
	'./images/stable/08_hlg/sysupgrade/': 'Heiligenhaus',
	'./images/stable/08_hlg/factory/': 'Heiligenhaus',
	'./images/stable/05_mon/sysupgrade/': 'Monheim',
	'./images/stable/05_mon/factory/': 'Monheim',
	'./images/stable/09_lgf/sysupgrade/': 'Langenfeld',
	'./images/stable/09_lgf/factory/': 'Langenfeld',
	'./images/stable/11_lvr/sysupgrade/': 'LVR',
	'./images/stable/11_lvr/factory/': 'LVR',   
},
  // branch descriptions shown during selection
  branch_descriptions: {
  //  Mettmann: 'Gut getestet, zuverlässig und stabil.'
//    routersoftware: 'Vorabtests neuer Stable-Kandidaten.',
  //  experimental: 'Ungetestet, automatisch generiert.'
  },
  // recommended branch will be marked during selection
  recommended_branch: 'stable',
  // experimental branches (show a warning for these branches)
  experimental_branches: ['experimental'],
 /// path to preview pictures directory
  preview_pictures: 'pictures/',
  // link to changelog
  changelog: 'CHANGELOG.html'
};
