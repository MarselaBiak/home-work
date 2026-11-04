"use strict";

import Model from './todoModules/Model.js';
import View from './todoModules/View.js';
import Controller from './todoModules/Controller.js';

const model = Model()
const view = View()
Controller(model, view)


