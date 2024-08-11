import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
	model(){
		return ['Dennis Ritchie', 'Tim Berners Lee', 'Linus Torvalds','Bjarne Stroustrup','James Gosling'];
	}

}
