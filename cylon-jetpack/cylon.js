jetpack.statusBar.append({
		html: '<canvas id="cylon" height="20" width="80"></canvas>',
		onReady: cylonInit,
		width: 80
});

function cylonInit(doc)
{
		var C = jQuery("#cylon", doc)[0].getContext("2d"),
			sX = 6,
			sY = 4,
			sD = 3,
			right = true;

		function moveScanner()
		{
				C.fillStyle = "#555555";
				C.fillRect(0,0,80,20);

				C.fillStyle = "#000000";
				C.beginPath();
				C.moveTo(0,0);
				C.lineTo(36,10);
				C.lineTo(44,10);
				C.lineTo(80,0);
				C.lineTo(80,4);
				C.lineTo(44,20);
				C.lineTo(36,20);
				C.lineTo(0,4);
				C.closePath();
				C.fill();

				C.fillStyle = "#FF0000";
				C.beginPath();
				C.arc(sX, sY, sD, 0, Math.PI*2, true);
				C.closePath();
				C.fill();

				if(right)
						sX += 2.5;
				else
						sX -= 2.5;

				if(sX > 0 && sX < 40 && right)
				{
						sD += .2;
						sY += 1;
				}
				else if(sX > 40 && sX < 80 && right)
				{
						sD -= .2;
						sY -= 1;
				}
				else if(sX > 0 && sX < 40 && !right)
				{
						sD -= .2;
						sY -= 1;
				}
				else if(sX > 40 && sX < 80 && !right)
				{
						sD += .2;
						sY += 1;
				}

				if(sX >= 80 && right) right = false;
				if(sX <= 0 && !right) right = true;
		};

		setInterval(moveScanner, 60);
}
