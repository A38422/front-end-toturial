## CSS3


Cascading Style Sheets (CSS) là một ngôn ngữ được sử dụng để minh họa giao diện, kiểu và định dạng của tài liệu được viết bằng bất kỳ ngôn ngữ đánh dấu nào. Nói một cách dễ hiểu, nó được dùng để tạo kiểu và sắp xếp bố cục của các trang Web. CSS3 là phiên bản mới nhất của phiên bản CSS, trước đó là CSS2.

Một thay đổi đáng kể trong CSS3 so với CSS2 là sự ra đời của các mô-đun. Lợi ích của chức năng này là nó cho phép thông số kỹ thuật được hoàn thiện và chấp nhận nhanh hơn, vì các phân đoạn được hoàn thiện và chấp nhận theo từng phần. Ngoài ra, điều này cho phép trình duyệt hỗ trợ các phân đoạn của thông số kỹ thuật.

Một số mô-đun chính của CSS3 là:

- Mô hình hộp
- Giá trị hình ảnh và nội dung thay thế
- Hiệu ứng văn bản
- Bộ chọn
- Nền và đường viền
- Ảnh động
- Giao diện người dùng (UI)
- Nhiều bố cục cột
- Chuyển đổi 2D / 3D


## Sử dụng CSS3


### CSS có thể được thêm vào tài liệu HTML theo 3 cách:

- Inline: Sử dụng style thuộc tính bên trong các phần tử HTML
- Internal: Sử dụng thẻ < style > trong < head >
- External: Sử dụng thẻ < link > để liên kết với một CSS bên ngoài


### Độ ưu tiên:


1. Internal, External
2. Inline (1000)
3. #id (100)
4. .class (10)
5. tag (1)
6. Equal specificty (cùng điểm thì ai gọi sau sẽ được ưu tiên)


## Các thuộc tính trong CSS


### Select


- Normal: Lựa chọn dựa vào tag
- Pseudo: Một lớp giả được sử dụng để xác định trạng thái đặc biệt của một phần tử.
- Attribute: Lựa chọn dựa vào thuộc tính của tag


| PROPERTY | DESCRIPTION |
| ------ | ------ |
| font-family | quy định các phông chữ cho một phần tử |
| font-size | quy định cỡ chữ cho một phần tử |
| font-style | quy định kiểu phông chữ cho một phần tử |
| font-weight | đặt độ dày mỏng cho chữ |
| letter-spacing | tăng hoặc giảm khoảng cách giữa các từ |
| line-height | xác định chiều cao cho mỗi dòng |
| text-transform | kiểm soát chữ in hoa |
| text-decoration | trang trí thêm vào văn bản |
| word-spacing | tăng giảm khoảng cách giữa các chữ |
| background | đặt hình nền, màu nền, kích thước nền, ... |
| color | xác định màu sắc |
| margin | thiết lập lề cho phần từ |
| padding | phần đệm của đường viền là khoảng trống giữa nội dung và đường viền của phần tử đó |
| border | xác định chiều rộng đường viền, màu đường viền, kiểu đường viền, ... |
| outline | xác định chiều rộng đường viền, kiểu phác thảo, màu sắc phác thảo, ... |
| float | xác định một yếu tố nổi trái, phải hoặc không có gì cả |
| list-style | định đạng kiểu danh sách |
| opacity | thiết lập độ mờ |
| visibillity | quy định ẩn hiện một phần tử |
| position: relative | đặt phần tử ở vị trí tương đối so với bình thường |
| position: fixed | đặt phần tử ở vị trí cố định, dù cuộn lên xuống cũng luôn ở vị trí đó |
| position: absolute | đặt phần tử ở vị trí tuyệt đối với phần tử cha gần nhất |
| display: inline | các item xếp trên một dòng, chỉ có thể điều chỉnh margin và không thể set width, height |
| display: block | các item mặc định xuống dòng nếu width và height không được set |
| display: inline-block | các item xếp trên một dòng và có thể set width và height |
| display: flex | sắp xếp bố cục các phần khối dễ dàng và linh hoạt |
| display: flex-direction | xác định hướng các mục flex được đặt trong vùng chứa flex |
| display: flex-flow | xác định hướng uốn và bọc linh hoạt |
| background-gradient | cho phép hiển thị các chuyển đổi mượt mà giữa hai hoặc nhiều màu được chỉ định |
| text-shadow | tạo bóng cho chữ |
| box-shadow | tạo bóng cho hộp |
| transform | chuyển đổi 2D hoặc 3D cho một phần tử (xoay, xiên, chia tỉ lệ, ...) |
| !important | đặt làm tầm quan trọng, sẽ ghi đè tất cả quy tắc trước đó |
| keyframes | yếu tố cấu thành nên CSS animations, nó định nghĩa hiệu ứng sẽ trông ra sao tại mỗi thời điểm trong dải thời gian của hiệu ứng |
| animation-bounce | hiệu ứng nảy |
| animation-fadeOut | hiệu ứng mờ dần |
| animation-slideUp | hiệu ứng trượt lên |
| animation-slideLeft | hiệu ứng trượt sang trái |
| animation-zoomIn | hiệu ứng phóng to |
| animation-zoomUot | hiệu ứng thu nhỏ |


