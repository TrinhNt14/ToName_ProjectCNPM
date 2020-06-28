                                                    ToName_ProjectCNPM
1. Mô tả:
	o Đây là dự án cuối kỳ môn Công nghệ phần mềm có tên là To Name
	o Phần mềm này giúp người chơi có thể biết hình ảnh và tên của các đối tượng trong thiên nhiên như: thực vật, động vật bằng thao tác kéo thả chuột.
2. Cấu trúc dự án gồm 1 màn hình khởi động, các bài học(số lượng tùy theo dữ liệu ban đầu), màn hình kết thúc mỗi bài và màn hình chúc mừng hoàn thành khóa học:
	o Màn hình khởi động: Tắt, bật âm thanh; chuyển đổi ngôn ngữ và nút chuyển bắt đầu vào bài học.
	o Bài học: Số lượng tùy theo dữ liệu vào, bao gồm yêu cầu, hình ảnh và tên các bộ phận trong hình.
	o Màn hình kết thúc mỗi bài học: bao gồm sao đánh giá, điểm, làm lại và nhấn nút “tiếp theo” để qua bài tiếp theo.
	o Màn hình chúc mừng cuối cùng: nhấn "Quay lại bài học" để quay lại màn hình khởi động.
3. Các thao tác chính
	o Nhấn chuột và kéo thả để đặt vật đúng vị trí.
	o Nhấn Trở về để quay lại màn hình chọn bài học.
	o Nhấn Tiếng việt để đổi ngôn ngữ: tiếng Anh, tiếng Việt.
	o Nhấn biểu tượng câu hỏi để nghe nhiệm vụ màn chơi.
	o Nhấn biểu tượng gợi ý để gợi ý làm bài
4. Dữ liệu: lấy từ file json. Để thêm màn chơi chỉ cần thêm phần tử mảng trong các file json với dữ liệu tương ứng:
	o Lấy dữ liệu về các bộ phận từ file Part.json.
	o Lấy dữ liệu các thẻ tên từ file tagName.json.
	o Lấy dữ liệu các thẻ đích từu file Location.json.
	o Lấy dữ liệu các đường nối thẻ đích và bộ phận trong file Line.json.
	o Lấy dữ liệu về yêu cầu từ file Question.json.

5. Nền tảng:
	o JAVASCRIPT - JQUERY.
	o HTML.
	o CSS
