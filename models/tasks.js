/**
 * Tasks 
 */
class Tasks {
  key = "app_tasks";
  items = [];

  constructor() {
    const data = window.localStorage.getItem(this.key);
    if (data !== null) {
      this.items = JSON.parse(data);
    }
  }

  /**
   * _getIndexByID 
   * 
   * An internal method for retrieving todos
   * by id.
   * @param {int} id 
   * @returns boolean
   */
  _getIndexByID(id) {
    return this.items.findIndex((item) => {
      return item.id === id;
    })
  }


  /**
   * Create: creates new task and adds it to the 
   * available list of todos
   * @param {string} title 
   */
  create(title) {
    const id = Math.random()+"";
    this.items.push({
      id,
      title,
      done: false
    });
    window.localStorage.setItem(this.key, JSON.stringify(this.items))
  }


  /**
   * List returns list of available items
   * @returns [items]
   */

  list() {
    return this.items;
  }

  /**
   * Togggles the current status of a specific todo
   * @param {int} id 
   */

  toggleDone(id) {
    const index = this._getIndexByID(id);
    let item = this.items[index];
    if ("done" in item) {
      item.done = !item.done;
    } else {
      item.done = true;
    }
    this.items[index] = item;
    window.localStorage.setItem(this.key, JSON.stringify(this.items))
  }


  /** 
    * Deletes todo item from list by id
    * @param {int} id
  */
  delete(id) {
    this.items.splice(this._getIndexByID(id), 1);
    window.localStorage.setItem(this.key, JSON.stringify(this.items))
  }

  /**
   * Updates specific todo
   * @param {int} id 
   * @param {string} title 
   */
  updateTodo(id, title) {
    const index = this._getIndexByID(id)
    let todo = this.items[index]
    todo.title = title
    window.localStorage.setItem(this.key, JSON.stringify(this.items))
  }

}

export default new Tasks();