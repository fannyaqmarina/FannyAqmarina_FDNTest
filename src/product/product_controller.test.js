const status = require('../../helpers/status_helper');
const controller =require('./product_controller');
const service = require('./product_service');

jest.mock('./product_service', () => ({ getData: jest.fn() }));
jest.mock('../../helpers/status_helper.js',()=>({forbiddenMessage:jest.fn()}))

describe('Controller', () => {
  let mRes;
  let mNext;
  beforeEach(() => {
    mRes = { status: jest.fn().mockReturnThis(), message: jest.fn(),code:jest.fn() };
    mNext = jest.fn();
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  test('should return message error when receive error from service', () => {
    const mReq = {};
    const mError = new Error('Data error');
    service.getData.mockImplementationOnce(() => {
      throw mError;
    });
    status.forbiddenMessage.mockReturnValueOnce(()=>{})
  controller.getData(mReq, mRes, mNext);
    expect(service.getData).toBeCalled();
    expect(status.forbiddenMessage).toBeCalled();
  });

  test('should return product result', () => {
    const mReq = { params: { max: 2 } };
    service.getData.mockReturnValueOnce({ data: 'fake data' });
    controller.getData(mReq, mRes);
    expect(service.getData).toBeCalled();
  });
});