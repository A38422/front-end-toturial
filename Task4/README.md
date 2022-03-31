## JavaScript


### Quy tắc đăt tên biến, hàm


- Bắt đầu bằng ký tự hoặc ký tự gạch chân _ (không được bắt đầu bằng số)
- Không chứa các ký tự đặc biệt như & * ( , )
- Tên biến không được trùng với từ khóa như var let for if ...
- Hàm Javascript được viết theo kiểu camelCase. Cách tốt nhất để thực sự cho biết hàm đang làm gì là sử dụng một động từ làm tiền tố cho tên hàm.
- Ngoài ra, còn có quy tắc sử dụng khoảng trắng, thụt lề và chú thích
Lưu ý: Javascript có phân biệt chữ hoa và chữ thường


Mục đích của các quy tắc giúp cải thiện khả năng đọc mã và bảo trì dễ dàng hơn


### DOM

DOM là tiêu chuẩn W3C (World Wide Web Consortium)

DOM xác định một tiêu chuẩn để truy cập tài liệu: "Mô hình đối tượng tài liệu W3C (DOM) là một nền tảng và giao diện ngôn ngữ trung lập cho phép các chương trình và tập lệnh truy cập động và cập nhật nội dung, cấu trúc và kiểu của tài liệu."

Tiêu chuẩn DOM W3C được chia thành 3 phần khác nhau:

- Core DOM: mô hình tiêu chuẩn cho tất cả các loại tài liệu 
- DOM XML: mô hình tiêu chuẩn cho các tài liệu XML
- HTML DOM: Mô hình tiêu chuẩn cho các tài liệu HTML

HTML DOM là một mô hình đôi tượng tiêu chuẩn giao diện lập trình cho HTML. 
Nó định nghĩa các phần tử HTML dưới dạng đối tượng, các thuộc tính, phương pháp, sự kiện của các phần tử HTML

Nói cách khác: HTML DOM là một tiêu chuẩn cho cách lấy, thay đổi, thêm hoặc xóa các phần tử HTML.

### JSON

- JSON là viết tắt của Java Script Object Notation
- JSON là một định dạng trao đổi dữ liệu nhẹ
- JSON là văn bản thuần túy được viết bằng ký hiệu đối tượng JavaScript
- JSON được sử dụng để gửi dữ liệu giữa các máy tính
- JSON độc lập với ngôn ngữ 

### LocalStorage

Đối tượng LocalStorage cho phép lưu các cặp khóa/giá trị trong trình duyệt

Đối tượng được lưu trữ không có ngày hết hạn

Dữ liệu cũng không bị xóa khi đóng trình duyệt và có sẵn cho các phiên trong tương lai

Ngoài ra, có đối tượng sessionStorage lưu trữ dữ liệu một phiên

### Client - Server

Server chấp nhận tất cả các yêu cầu hợp lệ từ mọi nơi khác nhau trên internet, sau đó trả kết quả về client đã gửi yêu cầu đó

Để giao tiếp được giữa client và server thì thông qua giao thức, Một số giao thức phổ biến như: HTTPS, TCP/IP, FTP, ...

Ưu điểm: 

- Giúp làm việc trên bất kì một máy tính nào có hỗ trợ giao thức truyền thông
- Hỗ trợ người dùng nhiều dịch vụ đa dạng và sự tiện dụng bởi khả năng truy cập từ xa
- Chỉ mang đặc điểm của phần mềm mà không hề liên quan đến phần cứng

Nhược điểm:

Vấn đề bảo mật dữ liệu thông tin đôi khi còn chưa được an toàn lắm. Vì do phải trao đổi dữ liệu giữa 2 máy tính khác nhau ở 2 khu vực địa lý cách xa nhau.

### API

API là các phương thức, giao thức kết nối giữa các thư viện và ứng dụng khác.
API cung cấp khả năng truy xuất đến một tập các hàm hay dùng từ đó có thể trao đổi dữ liệu giữa các ứng dụng

Web API: 

- Là hệ thống API được sử dụng trong các hệ thống website. Hầu hết các website đều ứng dụng đến Web API cho phép bạn kết nối, lấy dữ liệu hoặc cập nhật cơ sở dữ liệu.
- Hỗ trợ đầy đủ các phương thức: GET, POST, PUT, DELETE dữ liệu. Nó cũng có khả năng hỗ trợ đầy đủ các thành phần HTTP: URI, request/response headers, caching, versioning, content format.

### AJAX

AJAX là phương thức trao đổi dữ liệu với máy chủ và cập nhật một hay nhiều phần của trang web, hoàn toàn không reload lại toàn bộ trang.

Ajax được viết bằng Javascript chạy trên client, tức là mỗi browser sẽ chạy độc lập hoàn toàn không ảnh hưởng lẫn nhau. Về mặt kỹ thuật, nó đề cập đến việc sử dụng các đối tượng XmlHttpRequest để tương tác với một máy chủ web thông qua Javascript.

Lợi ích:

- AJAX được sử dụng để thực hiện một callback. Được dùng để thực hiện việc truy xuất dữ liệu hoặc lưu trữ dữ liệu mà không cần phải reload lại toàn bộ trang web. Với những server nhỏ thì việc này cũng tiết kiệm được băng thông cho chúng ta hơn.
- Cần gì thì chỉ gửi dữ liệu phần đó, load lại 1 phần nhỏ để cập nhật thông tin chứ không load cả trang. Bằng cách này thì có thể giảm thiểu được tốc độ tải trang giúp người dùng có trải nghiệm tốt hơn.

### Fetch

Fetch API là một API đơn giản cho việc gửi và nhận requesst bằng js. Với fetch thì việc thực hiện các yêu cầu web và xử lý phản hồi dễ dàng hơn so với XMLHttpRequest cũ.

### Promise

Promise là một đối tượng sẽ trả về một giá trị trong tương lai dùng để xử lý bất đồng bộ. Promise sử dụng để tránh callback hell

Promise sẽ có 3 trạng thái:

- Pending (đang xử lý)
- Fulfilled (đã hoàn thành)
- Rejected (đã bị từ chối) 