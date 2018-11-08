import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Session } from '../../services/session.service';
import { SelectItem } from 'primeng/primeng';
import { Router } from '@angular/router';

interface SelectOption {
    label: string,
    value: number,
    url: string
}


@Component({
	selector: 'app-forum',
	templateUrl: './forum.component.html',
	styleUrls: [ './forum.component.css' ]
})
export class ForumComponent implements OnInit {
    private navigation_options: SelectOption[];
    private selected_option: any;
    private twitter: string;
    private keywords: any;

    constructor(
        private session: Session,
        private router: Router,
        private elementRef: ElementRef
    ) {}

    ngOnInit() {
        this.keywords = []
        this.twitter = '';
        this.selected_option = 0;
        this.navigation_options = [
            { label: 'All', value: 0, url: 'forum' },
            { label: 'Posts', value: 1, url: 'forum' },
            { label: 'Questions', value: 2, url: 'forum' },
            { label: 'Tutorials', value: 3, url: 'forum' },
            { label: 'Tools', value: 4, url: 'forum' },
            { label: 'Issues', value: 5, url: 'forum' },
            { label: 'Nomenclature', value: 6, url: 'forum' },
        ];

    }


    go_to_blog_help() {
        this.router.navigate(['forum/selected_question', { id: '1541191967102'}]);
    }

    go_to_option() {
        let selected = this.navigation_options[this.selected_option]['label'] === 'All' ? []:this.navigation_options[this.selected_option]['label'];
        let _mode = this.keywords.concat(selected);

        this.router.navigate([this.navigation_options[this.selected_option]['url'], {mode: _mode} ]);
    }

    open_instructions() {
        this.router.navigate(["/forum/selected_question", {id:1541191047351}]);
    }

    search() {
        let selected = this.navigation_options[this.selected_option]['label'] === 'All' ? []:this.navigation_options[this.selected_option]['label'];
        let _mode = this.keywords.concat(selected);
        this.router.navigate([this.navigation_options[this.selected_option]['url'], {mode: _mode} ]);
    }
}
