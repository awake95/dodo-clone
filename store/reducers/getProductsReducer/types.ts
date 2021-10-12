export enum EventActionEnum {
    GET_DATA = 'GET_DATA',
}

export interface GetProductAction {
    type: EventActionEnum.GET_DATA;
    payload: []
}
