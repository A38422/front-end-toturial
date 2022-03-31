## Moment

Là một thư viện mạnh dùng để thao tác datetime trong javascript

Được thiết kế để hoạt động trên cả brower và Node.js

Parse

- Thay vì sửa đổi Date.prototype nguyên bản, Moment.js tạo một wrapper cho Date object. Để có được đối tượng wrapper này, chỉ cần gọi moment() với một trong các loại đầu vào được hỗ trợ.
- Moment.prototype được thể hiện qua moment.fn (Nếu muốn thêm các chức năng  riêng).
- Để dễ tham chiếu, bất kỳ phương pháp nào trên Moment.prototype sẽ được tham chiếu trong các tài liệu như moment#method

### Khởi tạo

Cú pháp moment(); Để có được ngày và giờ hiện tại, chỉ cần gọi moment() mà không có tham số.

### String

Cú pháp: moment(String); Ví dụ: var day = moment("2022-01-01");

### String + Format

moment(String, String);
moment(String, String, String);
moment(String, String, Boolean);
moment(String, String, String, Boolean);

### Format

moment.format(String); để định dạng ngày tháng theo format

### Unix

moment.unix(Number); để định dạng ngày tháng theo số giây Unix (ngày 1 tháng 1 năm 1970 00:00 giờ UTC)
