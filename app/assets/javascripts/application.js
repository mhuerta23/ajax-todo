$(document).on('ready', ready);

function ready () {
  $'#new_task').on('ajax:success', newTask);

  function newTask() {
    window.location.reload();
  }
}
