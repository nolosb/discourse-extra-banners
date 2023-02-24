import Component from "@ember/component";
import { inject as service } from "@ember/service";
import discourseComputed from "discourse-common/utils/decorators";

export default Component.extend({
  tagName: "",
  router: service(),

  @discourseComputed("router.currentRouteName")
  canDisplay(currentRouteName) {
    //console.log(currentRouteName);
    if (currentRouteName === `discovery.top`) {
      return true;
    } else {
      return false;
    }
  },
});