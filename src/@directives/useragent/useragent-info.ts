/**
 * @name useragent-info
 * @description User agent info abstract class in ngx-responsive
 *
 * @author Manu Cutillas
 * @license MIT
 */
import { Subscription } from 'rxjs/Subscription';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { ResponsiveState } from '../../@core';
import { Observable } from 'rxjs/Observable';
import { distinctUntilChanged } from 'rxjs/operators';
export abstract class UserAgentInfo {
    public replaySubject$: ReplaySubject<any> = new ReplaySubject();
    private _subscription: Subscription;
    constructor(public _responsiveState: ResponsiveState) {}
    public connect(): Observable<any> {
        this._subscription = this._responsiveState.userAgent$.pipe(distinctUntilChanged())
        .subscribe((data) => {
            this._emitUserAgent(data);
        });
        return this.replaySubject$.asObservable();
    }
    public disconnect(): void {
        this._subscription.unsubscribe();
    }
    get getUserAgent(): Observable<any> {
        return this.replaySubject$.asObservable();
    }
    protected _emitUserAgent(value: any): void {
        this.replaySubject$.next(value);
    }
}
