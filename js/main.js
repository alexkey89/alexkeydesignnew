const app = angular.module('app', [])

app.controller('mainCtrl', function(){
	const vm = this;

	vm.msg = 'welcome to the future';
	vm.menu = ['home', 'portfolio', 'about'];
	vm.logo = 'main';
	vm.clients = [{'name': 'VML'}, {'name': 'Cafe la mode'}, {'name': 'Celio Cyprus'}]
	vm.services = ['web design', 'microsites', 'interactive kiosk implementation']

	for (let i = 0; i < vm.clients.length; i++) {
		vm.clients[i].img = vm.clients[i].name + '.jpg';
	}


})

app.component('mainServices', {
	template: `<div>
					<ul>
						<li ng-repeat="s in main.services">{{s}}</li>
					</ul>
			   </div>
			   `,
	controller: 'mainCtrl as main'
})


app.component('mainHeader', {
	bindings: {
		bg: '@'
	},
	template: `<header style="background: {{main.bg}}">
				<p><img height="50" src="img/{{main.logo}}.png" /></p>
					<ul>
						<li ng-repeat="i in main.menu track by $index">{{i}}</li>
					</ul>
				</header>
				`,
	controller: 'mainCtrl as main'
})



app.component('mainFooter', {
  bindings: {
    footprint: '@',
    year: '@'
  },
  template:`<footer>
  				<small>
  					{{ $ctrl.footprint }} | {{$ctrl.year}}
  				</small>
  			</footer>
  			`
});


app.component('mainClients', {
  template:`
  			<div class="clients">
	  			<h1>Clients</h1>
	  			<ul>
	  				<li ng-repeat="c in main.clients track by $index">{{c.name}}</li>
	  				<a href="#/about">Privacy policy</a>
	  			</ul>
  			</div>
  			`,
  	controller: 'mainCtrl as main'
});

app.component('mainContact', {
	bindings: {
		title: '@',
		subtitle: '@',
		num: '@'
	},
	  template:`
  			<div class="contact">
  				<form>
  					<h1>{{$ctrl.title}}</h1>
  					<small>{{$ctrl.subtitle}}</small>
  					<label>
  						<textarea max="{{$ctrl.num}}"></textarea>
  						<input type="submit" />
  					</label>
  				</form>
  			</div>
  			`
	})


	app.factory('clients', () =>{
		const clients = [{'name': 'VML'}, {'name': 'Cafe la mode'}, {'name': 'Celio Cyprus'}];
		return clients;
	})